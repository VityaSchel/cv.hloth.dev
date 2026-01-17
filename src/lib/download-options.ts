export type DownloadOptions = {
	name: string;
	filename: string;
	link: string;
	sizeBytes: number;
}[];

export const downloadOptions = [
	["PDF", "Viktor-Shchelochkov-Resume.pdf", "Viktor Shchelochkov Resume.pdf"],
	["AVIF", "Viktor-Shchelochkov-Resume.avif", "Viktor Shchelochkov Resume.avif"],
	["JPEG", "Viktor-Shchelochkov-Resume-hq.jpeg", "Viktor Shchelochkov Resume.jpeg"]
];
