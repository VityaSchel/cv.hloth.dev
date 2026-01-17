import fs from "fs";
import path from "path";
import type { PageServerLoad } from "./$types";
import { resumeVersion } from "@/consts";
import { PWD } from "$env/static/private";
import { downloadOptions } from "@/download-options";

export const load: PageServerLoad = async () => {
	return {
		downloadOptions: await Promise.all(
			downloadOptions.map(async ([name, link, filename]) => ({
				name,
				filename,
				link: "/" + resumeVersion + "/" + link,
				sizeBytes: await fs.promises
					.stat(path.join(PWD, "./static/", resumeVersion, link))
					.then((stat) => stat.size)
			}))
		)
	};
};
