# Figma Text to PDF

Uses [text-letter-box-exporter](https://git.hloth.dev/hloth/text-letter-box-exporter/) to render text from Figma into a PDF with a rendered background.

I built this projects for my resume because Figma export would produce 10+MB PDF. This project produces a PDF that is only a few hundred KB.

## Usage

Export your Figma design using the text-letter-box-exporter plugin. This will produce a `layout.json` file, which you should place in the same directory as `generate-pdf.ts`.

Then place background.jpg and a font that supports UTF-8, such as Noto Sans to font.ttf.

Then run the script with Bun (in src directory), specifying the source width and height of your Figma design in pixels, as well as the font file:

```bash
bun run generate-pdf.ts <source width> <source height> <font.ttf>
```

The result will be `output.pdf`.

## License

[MIT](./LICENSE)

## Donate

[hloth.dev/donate](https://hloth.dev/donate)