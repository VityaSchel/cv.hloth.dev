import fs from "fs";
import path from "path";
import type { PageServerLoad } from "./$types";
import { resumeVersion } from "@/consts";
import { PWD } from "$env/static/private";

export const load: PageServerLoad = async () => {
	return {
		downloadOptions: await Promise.all(
			[
				["PDF", "Viktor-Shchelochkov-Resume.pdf", "Viktor Shchelochkov Resume.pdf"],
				["AVIF", "Viktor-Shchelochkov-Resume.avif", "Viktor Shchelochkov Resume.avif"],
				["JPEG", "Viktor-Shchelochkov-Resume-hq.jpeg", "Viktor Shchelochkov Resume.jpeg"]
			].map(async ([name, link, filename]) => ({
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
