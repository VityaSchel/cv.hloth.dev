import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { PageServerLoad } from "./$types";
import { resumeVersion } from "@/consts";

const __dirname = path.dirname(fileURLToPath(import.meta.url)) + "/";

export const load: PageServerLoad = async () => {
	return {
		downloadOptions: await Promise.all(
			[["PDF", "/Viktor-Shchelochkov-Resume.pdf"]].map(async ([name, link]) => ({
				name,
				link: "/" + link,
				sizeBytes: await fs.promises
					.stat(path.join(__dirname, "../../static/", resumeVersion, link))
					.then((stat) => stat.size)
			}))
		)
	};
};
