import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import type { PageServerLoad } from "./$types";
import { resumeVersion } from "#lib/consts.js";
import { downloadOptions } from "#lib/download-options.js";

export const load: PageServerLoad = async () => {
	return {
		downloadOptions: await Promise.all(
			downloadOptions.map(async ([name, link, filename]) => ({
				name,
				filename,
				link: "/" + resumeVersion + "/" + link,
				sizeBytes: await fs.promises
					.stat(path.join(process.cwd(), "./static/", resumeVersion, link))
					.then((stat) => stat.size)
			}))
		)
	};
};
