import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import functions from "postcss-functions";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
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
