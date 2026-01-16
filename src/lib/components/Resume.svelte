<script>
	import { resumeVersion } from "$lib/consts";
	import preview from "$lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg?inline";
</script>

<div
	class="container-inline fix-corner-radius-blur relative m-auto aspect-595/842 h-auto w-full max-w-297.5"
>
	<div class="absolute top-0 left-0 size-full overflow-clip rounded-[4.3697479cqw]">
		<picture>
			<source srcset="/{resumeVersion}/background.avif" type="image/avif" />
			<source srcset="/{resumeVersion}/background.webp" type="image/webp" />
			<img
				src="/{resumeVersion}/background.jpeg"
				alt="Resume background"
				class="pointer-events-none absolute top-0 left-0 z-1 size-full text-[0px] backdrop-blur-sm select-none"
				loading="lazy"
				decoding="async"
				draggable="false"
			/>
		</picture>
		<img
			src={preview}
			alt=""
			class="animate-loading pointer-events-none absolute top-0 left-0 z-0 size-full"
			role="presentation"
			aria-hidden="true"
			draggable="false"
		/>
	</div>
	<div
		class="absolute top-0 left-0 z-1 flex h-full w-full flex-col gap-[calc(24*var(--cqw))] p-[calc(32*var(--cqw))] pt-[calc(88*var(--cqw))] [&_div]:bg-foreground-soft/20"
	>
		<div class="flex h-[calc(404*var(--cqw))] w-full gap-[calc(24*var(--cqw))]">
			<div class="flex w-[calc(761*var(--cqw))]"></div>
		</div>
		<div
			class="flex h-[calc(462*var(--cqw))] w-full flex-col gap-[calc(24*var(--cqw))] px-[calc(32*var(--cqw))] py-[calc(28*var(--cqw))]"
		>
			<div class="h-[calc(33*var(--cqw))] w-full"></div>
			<div
				class="grid h-[calc(349*var(--cqw))] w-full grid-cols-2 grid-rows-3 gap-[calc(16*var(--cqw))]"
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="flex h-[calc(650*var(--cqw))] w-full gap-[calc(24*var(--cqw))]">
			<div
				class="flex w-[calc(716*var(--cqw))] flex-col gap-[calc(24*var(--cqw))] px-[calc(32*var(--cqw))] py-[calc(28*var(--cqw))]"
			>
				<div class="h-[calc(33*var(--cqw))] w-full"></div>
				<div
					class="grid h-[calc(317*var(--cqw))] w-full grid-cols-2 grid-rows-5 gap-x-[calc(12*var(--cqw))] gap-y-[calc(16*var(--cqw))]"
				>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="flex h-[calc(192*var(--cqw))] flex-col gap-[calc(16*var(--cqw))]">
					<div class="h-[calc(36*var(--cqw))] pl-[calc(36*var(--cqw))]"></div>
					<div class="h-[calc(36*var(--cqw))] pl-[calc(36*var(--cqw))]"></div>
					<div class="h-[calc(36*var(--cqw))] pl-[calc(36*var(--cqw))]"></div>
					<div class="h-[calc(36*var(--cqw))] pl-[calc(36*var(--cqw))]"></div>
				</div>
			</div>
			<div class="flex w-[calc(386*var(--cqw))] flex-col gap-[calc(24*var(--cqw))]">
				<div
					class="grid h-[calc(382*var(--cqw))] w-full grid-cols-2 grid-rows-2 gap-[calc(2*var(--cqw))] p-[calc(2*var(--cqw))]"
				>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="flex flex-col px-[calc(26*var(--cqw))] py-[calc(24*var(--cqw))] gap-[calc(10*var(--cqw))] h-[calc(244*var(--cqw))]">
					<div class="w-full h-[calc(48*var(--cqw))]"></div>
					<div class="w-full h-[calc(35*var(--cqw))]"></div>
					<div class="w-full h-[calc(48*var(--cqw))]"></div>
					<div class="w-full h-[calc(35*var(--cqw))]"></div>
				</div>
			</div>
		</div>
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
