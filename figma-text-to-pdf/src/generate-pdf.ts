import {
	PDFDocument,
	PDFName,
	PDFNumber,
	PDFString,
	concatTransformationMatrix,
	popGraphicsState,
	pushGraphicsState,
	rgb,
} from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { readFileSync, writeFileSync } from "fs";

export type GroupBox = {
	f: 0 | 1;
	x: number;
	y: number;
	w: number;
	h: number;
	_: (LetterBox | GroupBox)[];
};

export type LetterBox = {
	x: number;
	y: number;
	w: number;
	h: number;
	c: string;
	l?: string;
	tid?: string;
	i?: number;
};

type FlattenedLetter = {
	x: number;
	y: number;
	w: number;
	h: number;
	c: string;
	l?: string;
	tid?: string;
	i?: number;
};

type HyperlinkSpan = {
	tid: string;
	start: number;
	end: number;
	url: string;
};

type LayoutFile =
	| (LetterBox | GroupBox)[]
	| {
			layout: (LetterBox | GroupBox)[];
			links?: HyperlinkSpan[];
	  };

type MergedLinkRect = {
	url: string;
	left: number;
	top: number;
	right: number;
	bottom: number;
};

const isGroupBox = (box: LetterBox | GroupBox): box is GroupBox => {
	return "f" in box && "_" in box;
};

const isLetterBox = (box: LetterBox | GroupBox): box is LetterBox => {
	return "c" in box;
};

function parseLayoutFile(jsonFile: string): {
	layout: (LetterBox | GroupBox)[];
	links: HyperlinkSpan[];
} {
	const data = JSON.parse(readFileSync(jsonFile, "utf8")) as LayoutFile;
	if (Array.isArray(data)) return { layout: data, links: [] };
	return { layout: data.layout, links: data.links ?? [] };
}

function flattenLetterBoxes(
	boxes: (LetterBox | GroupBox)[],
	offsetX: number = 0,
	offsetY: number = 0,
): FlattenedLetter[] {
	const letters: FlattenedLetter[] = [];

	for (const box of boxes) {
		if (isLetterBox(box)) {
			letters.push({
				x: box.x + offsetX,
				y: box.y + offsetY,
				w: box.w,
				h: box.h,
				c: box.c,
				l: box.l,
				tid: box.tid,
				i: box.i,
			});
		} else if (isGroupBox(box)) {
			if (box.f === 0) {
				const nested = flattenLetterBoxes(box._, offsetX, offsetY);
				letters.push(...nested);
			} else {
				const nested = flattenLetterBoxes(box._, offsetX + box.x, offsetY + box.y);
				letters.push(...nested);
			}
		}
	}

	return letters;
}

function buildLinkRectsFromSpans(
	letters: FlattenedLetter[],
	spans: HyperlinkSpan[],
): MergedLinkRect[] {
	const byTid = new Map<
		string,
		Map<number, { left: number; top: number; right: number; bottom: number }>
	>();
	for (const l of letters) {
		if (!l.tid || typeof l.i !== "number") continue;
		let indexMap = byTid.get(l.tid);
		if (!indexMap) {
			indexMap = new Map();
			byTid.set(l.tid, indexMap);
		}
		indexMap.set(l.i, {
			left: l.x,
			top: l.y,
			right: l.x + l.w,
			bottom: l.y + l.h,
		});
	}

	const merged: MergedLinkRect[] = [];

	for (const span of spans) {
		const url = span.url?.trim();
		if (!url) continue;
		const idx = byTid.get(span.tid);
		if (!idx) continue;

		const rects: Array<{ left: number; top: number; right: number; bottom: number }> = [];
		for (let i = span.start; i < span.end; i += 1) {
			const r = idx.get(i);
			if (r) rects.push(r);
		}
		if (rects.length === 0) continue;

		rects.sort((a, b) => (a.bottom !== b.bottom ? a.bottom - b.bottom : a.left - b.left));

		const flushLine = (line: typeof rects): void => {
			if (line.length === 0) return;
			line.sort((a, b) => a.left - b.left);
			const avgHeight = line.reduce((s, r) => s + (r.bottom - r.top), 0) / line.length;

			const xGapTol = Math.max(4, Math.min(40, avgHeight * 2.2));

			let cur: MergedLinkRect | null = null;
			for (const r of line) {
				if (!cur) {
					cur = { url, left: r.left, top: r.top, right: r.right, bottom: r.bottom };
					continue;
				}
				const gap = r.left - cur.right;
				if (gap <= xGapTol) {
					cur.left = Math.min(cur.left, r.left);
					cur.top = Math.min(cur.top, r.top);
					cur.right = Math.max(cur.right, r.right);
					cur.bottom = Math.max(cur.bottom, r.bottom);
				} else {
					merged.push(cur);
					cur = { url, left: r.left, top: r.top, right: r.right, bottom: r.bottom };
				}
			}
			if (cur) merged.push(cur);
		};

		let currentLine: typeof rects = [];
		let lineBaseline = 0;
		let lineAvgH = 0;
		let lineCount = 0;
		for (const r of rects) {
			const baseline = r.bottom;
			const h = r.bottom - r.top;
			const tol = Math.min(6, Math.max(2, (lineCount ? lineAvgH : h) * 0.35));

			if (currentLine.length === 0) {
				currentLine = [r];
				lineBaseline = baseline;
				lineAvgH = h;
				lineCount = 1;
				continue;
			}

			if (Math.abs(baseline - lineBaseline) <= tol) {
				currentLine.push(r);
				lineCount += 1;
				lineBaseline = lineBaseline + (baseline - lineBaseline) / lineCount;
				lineAvgH = lineAvgH + (h - lineAvgH) / lineCount;
			} else {
				flushLine(currentLine);
				currentLine = [r];
				lineBaseline = baseline;
				lineAvgH = h;
				lineCount = 1;
			}
		}
		flushLine(currentLine);
	}

	return merged;
}

function mergeEquivalentLinks(letters: FlattenedLetter[]): MergedLinkRect[] {
	const byUrl = new Map<
		string,
		Array<{ left: number; top: number; right: number; bottom: number }>
	>();

	for (const letter of letters) {
		const url = letter.l?.trim();
		if (!url) continue;
		const entry = {
			left: letter.x,
			top: letter.y,
			right: letter.x + letter.w,
			bottom: letter.y + letter.h,
		};
		const arr = byUrl.get(url);
		if (arr) arr.push(entry);
		else byUrl.set(url, [entry]);
	}

	const merged: MergedLinkRect[] = [];

	for (const [url, rects] of byUrl) {
		if (rects.length === 0) continue;

		rects.sort((a, b) => {
			if (a.bottom !== b.bottom) return a.bottom - b.bottom;
			return a.left - b.left;
		});

		const flushLine = (line: typeof rects): void => {
			if (line.length === 0) return;
			line.sort((a, b) => a.left - b.left);

			const avgHeight = line.reduce((sum, r) => sum + (r.bottom - r.top), 0) / line.length;
			const xGapTol = Math.max(2, Math.min(18, avgHeight * 0.9));
			const baselineTol = Math.min(6, Math.max(2, avgHeight * 0.35));

			let current: MergedLinkRect | null = null;

			for (const r of line) {
				if (!current) {
					current = { url, left: r.left, top: r.top, right: r.right, bottom: r.bottom };
					continue;
				}

				const gap = r.left - current.right;
				const baselineOk = Math.abs(r.bottom - current.bottom) <= baselineTol;
				if (gap <= xGapTol && baselineOk) {
					current.left = Math.min(current.left, r.left);
					current.top = Math.min(current.top, r.top);
					current.right = Math.max(current.right, r.right);
					current.bottom = Math.max(current.bottom, r.bottom);
				} else {
					merged.push(current);
					current = { url, left: r.left, top: r.top, right: r.right, bottom: r.bottom };
				}
			}

			if (current) merged.push(current);
		};

		let currentLine: typeof rects = [];
		let lineBaseline = 0;
		let lineAvgH = 0;
		let lineCount = 0;

		for (const r of rects) {
			const baseline = r.bottom;
			const h = r.bottom - r.top;
			const dynamicTol = Math.min(6, Math.max(2, (lineCount ? lineAvgH : h) * 0.35));

			if (currentLine.length === 0) {
				currentLine = [r];
				lineBaseline = baseline;
				lineAvgH = h;
				lineCount = 1;
				continue;
			}

			if (Math.abs(baseline - lineBaseline) <= dynamicTol) {
				currentLine.push(r);
				lineCount += 1;
				lineBaseline = lineBaseline + (baseline - lineBaseline) / lineCount;
				lineAvgH = lineAvgH + (h - lineAvgH) / lineCount;
			} else {
				flushLine(currentLine);
				currentLine = [r];
				lineBaseline = baseline;
				lineAvgH = h;
				lineCount = 1;
			}
		}

		flushLine(currentLine);
	}

	return merged;
}

async function generatePDF(
	letters: FlattenedLetter[],
	imagePath: string,
	outputPath: string,
	sourceWidth: number,
	sourceHeight: number,
	fontPath: string,
	links: HyperlinkSpan[] = [],
): Promise<void> {
	const A4_WIDTH = 595.28;
	const A4_HEIGHT = 841.89;

	const scaleX = A4_WIDTH / sourceWidth;
	const scaleY = A4_HEIGHT / sourceHeight;
	const scale = Math.min(scaleX, scaleY);

	console.log(`Source: ${sourceWidth}x${sourceHeight}px`);
	console.log(`Target: ${A4_WIDTH}x${A4_HEIGHT}pt`);
	console.log(`Scale factor: ${scale}`);

	const pdfDoc = await PDFDocument.create();
	pdfDoc.registerFontkit(fontkit);
	const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);

	const imageBytes = readFileSync(imagePath);
	const image = imagePath.toLowerCase().endsWith(".png")
		? await pdfDoc.embedPng(imageBytes)
		: await pdfDoc.embedJpg(imageBytes);
	const imageWidth = sourceWidth * scale;
	const imageHeight = sourceHeight * scale;
	page.drawImage(image, {
		x: 0,
		y: A4_HEIGHT - imageHeight,
		width: imageWidth,
		height: imageHeight,
	});

	const fontBytes = readFileSync(fontPath);
	const font = await pdfDoc.embedFont(fontBytes, { subset: true });
	const fontKitFont = fontkit.create(fontBytes);
	const unitsPerEm: number = fontKitFont.unitsPerEm || 1000;
	page.drawText(" ", { x: 0, y: 0, size: 1, font, opacity: 0 });
	const debugVisible = Bun.env.DEBUG_TEXT === "1";
	const textOpacity = debugVisible ? 1 : 0;

	const addUrlAnnotation = (x: number, y: number, w: number, h: number, url: string): void => {
		const context = pdfDoc.context;
		const rect = context.obj([
			PDFNumber.of(x),
			PDFNumber.of(y),
			PDFNumber.of(x + w),
			PDFNumber.of(y + h),
		]);
		const border = context.obj([PDFNumber.of(0), PDFNumber.of(0), PDFNumber.of(0)]);
		const action = context.obj({
			S: PDFName.of("URI"),
			URI: PDFString.of(url),
		});
		const annot = context.obj({
			Type: PDFName.of("Annot"),
			Subtype: PDFName.of("Link"),
			Rect: rect,
			Border: border,
			A: action,
		});
		const annotRef = context.register(annot);
		page.node.addAnnot(annotRef);
	};

	const mergedLinkRects = links.length
		? buildLinkRectsFromSpans(letters, links)
		: mergeEquivalentLinks(letters);
	for (const r of mergedLinkRects) {
		const x = r.left * scale;
		const w = (r.right - r.left) * scale;
		const y = A4_HEIGHT - r.bottom * scale;
		const h = (r.bottom - r.top) * scale;
		addUrlAnnotation(x, y, w, h, r.url);
	}

	for (const letter of letters) {
		const codePoint = letter.c.codePointAt(0);
		if (codePoint === undefined) {
			continue;
		}

		const glyph = fontKitFont.glyphForCodePoint(codePoint);
		const bbox = glyph?.bbox;
		const minX = bbox?.minX ?? 0;
		const minY = bbox?.minY ?? 0;
		const maxX = bbox?.maxX ?? glyph?.advanceWidth ?? unitsPerEm;
		const maxY = bbox?.maxY ?? unitsPerEm;

		const glyphWidthUnits = Math.max(1, maxX - minX);
		const glyphHeightUnits = Math.max(1, maxY - minY);

		const boxLeft = letter.x * scale;
		const boxTop = A4_HEIGHT - letter.y * scale;
		const boxWidth = letter.w * scale;
		const boxHeight = letter.h * scale;

		const glyphWidthAtSize1 = glyphWidthUnits / unitsPerEm;
		const glyphHeightAtSize1 = glyphHeightUnits / unitsPerEm;
		const xScale = boxWidth / glyphWidthAtSize1;
		const yScale = boxHeight / glyphHeightAtSize1;

		const minXAtSize1 = minX / unitsPerEm;
		const maxYAtSize1 = maxY / unitsPerEm;
		const textX = boxLeft - minXAtSize1 * xScale;
		const textY = boxTop - maxYAtSize1 * yScale;

		page.pushOperators(
			pushGraphicsState(),
			concatTransformationMatrix(xScale, 0, 0, yScale, textX, textY),
		);
		page.drawText(letter.c, {
			x: 0,
			y: 0,
			size: 1,
			font,
			opacity: textOpacity,
			color: debugVisible ? rgb(1, 0, 0) : rgb(0, 0, 0),
		});
		page.pushOperators(popGraphicsState());
	}

	const pdfBytes = await pdfDoc.save();
	writeFileSync(outputPath, pdfBytes);
	console.log("PDF generation complete");
}

const args = Bun.argv.slice(2);

if (args.length < 3) {
	console.error("Usage: bun generate-pdf.ts <source width> <source height> <font.ttf>");
	console.error("You should download a font that supports UTF-8, such as Noto Sans:");
	console.error("https://fontsource.org/fonts/noto-sans");
	process.exit(1);
}

const sourceWidth = Number(args[0]!);
const sourceHeight = Number(args[1]!);
const fontPath = args[2]!;

console.log("Parsing layout...");
const { layout, links } = parseLayoutFile("./layout.json");

const rootFrame = layout[0];
if (rootFrame && rootFrame.w === sourceWidth && rootFrame.h === sourceHeight) {
	rootFrame.x = 0;
	rootFrame.y = 0;
}

console.log("Flattening letter boxes...");
const letters = flattenLetterBoxes(layout);
console.log(`Found ${letters.length} letters`);

const outputFile = "./output.pdf";
console.log("Generating PDF...");
await generatePDF(
	letters,
	"./background.jpg",
	outputFile,
	sourceWidth,
	sourceHeight,
	fontPath,
	links,
);

console.log(`PDF written to ${outputFile}`);
