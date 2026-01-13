<script>
	import { resumeVersion } from "$lib/consts";
	import preview from "$lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg?inline";
</script>

<div
	class="container-inline fix-corner-radius-blur relative m-auto aspect-595/842 h-auto w-full max-w-297.5"
>
	<div class="absolute top-0 left-0 size-full overflow-clip rounded-[4.3697479cqw]">
		<picture>
			<source srcset="/{resumeVersion}/Viktor-Shchelochkov-Resume.avif" type="image/avif" />
			<source srcset="/{resumeVersion}/Viktor-Shchelochkov-Resume.webp" type="image/webp" />
			<img
				src="/{resumeVersion}/Viktor-Shchelochkov-Resume.jpeg"
				alt="Resume background"
				class="pointer-events-none absolute top-0 left-0 z-1 size-full text-[0px] backdrop-blur-sm select-none"
				loading="lazy"
				decoding="async"
			/>
		</picture>
		<img
			src={preview}
			alt=""
			class="animate-loading absolute top-0 left-0 z-0 size-full"
			role="presentation"
			aria-hidden="true"
		/>
	</div>
</div>

<style>
	.fix-corner-radius-blur {
		clip-path: inset(0 round 1px);
	}
	.animate-loading {
		animation: loading 1s ease-in-out forwards infinite;
	}
	@keyframes loading {
		0% {
			filter: brightness(100%);
		}
		50% {
			filter: brightness(110%);
		}
		100% {
			filter: brightness(100%);
		}
	}
</style>
