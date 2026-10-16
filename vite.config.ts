import tailwindcss from "@tailwindcss/vite";
import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import functions from "postcss-functions";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter()
		})
	],
	css: {
		postcss: {
			plugins: [
				functions({
					functions: {
						cqw: (value) => `calc(${value}*var(--cqw))`
					}
				})
			]
		}
	}
});
