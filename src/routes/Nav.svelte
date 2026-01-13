<script lang="ts">
	import fileSize from "file-size";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import IconDownload from "@lucide/svelte/icons/download";
	import { scrollY } from "svelte/reactivity/window";
	import { untrack } from "svelte";
	import { Spring, Tween } from "svelte/motion";

	let {
		downloadOptions
	}: {
		downloadOptions: {
			name: string;
			link: string;
			sizeBytes: number;
		}[];
	} = $props();

	let prevScrollY = $state(0);
	let expandProgress = new Spring(0, {
		stiffness: 0.1,
		damping: 0.25,
		precision: 0.01
	});

	$effect(() => {
		if (scrollY.current !== undefined) {
			expandProgress.target = scrollY.current < untrack(() => prevScrollY) ? 1 : 0;
			prevScrollY = scrollY.current;
		}
	});

	let p = $derived(expandProgress.current);
	let pLowCapped = $derived(Math.max(0, p));
	let pClamped = $derived(Math.min(pLowCapped, 1));

	let saveButtonLabelWidth = $state(0);
</script>

<nav class="fixed bottom-0 left-0 z-50 flex w-full justify-center">
	<div class="flex w-full max-w-297.5 justify-end p-2">
		<div
			class="flex rounded-full border border-zinc-700/15 bg-(--bg) p-2 backdrop-blur-lg shadow-lg"
			style="
				--bg: color-mix(
					in oklab,
					color-mix(
						in oklab,
						var(--color-zinc-700) {pClamped * 100}%,
						var(--color-zinc-900) {(1 - pClamped) * 100}%
					) {10 + (1 - pClamped) * 20}%,
					transparent
				);
			"
		>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							class="cursor-pointer gap-0 border border-input/(--border-opacity) bg-primary/(--bg-opacity) px-(--padding-inline)! transition-none hover:bg-(--hover-bg)"
							style="
								--bg-opacity: {pClamped * 100}%;
								color: color-mix(
									in oklab,
									var(--primary-foreground) {pClamped * 100}%,
									color-mix(in oklab, var(--color-neutral-100) 80%, transparent)
								);
								--border-opacity: {(1 - pClamped) * 100}%;
								--padding-inline: {9 + p * 7}px;
								--hover-bg: color-mix(
									in oklab,
									color-mix(
										in oklab,
										var(--primary) {pClamped * 100}%,
										var(--input) {(1 - pClamped) * 100}%
									) {pClamped * 40 + 50}%,
									transparent
								);
							"
						>
							<IconDownload />
							<span
								class="overflow-clip mask-r-from-(--mask-width)"
								style="
									width: {pLowCapped * saveButtonLabelWidth}px;
									--mask-width: {pLowCapped * 100}%;
								"
							>
								<span class="w-max ps-2 whitespace-nowrap" bind:offsetWidth={saveButtonLabelWidth}>
									Save
								</span>
							</span>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						{#each downloadOptions as { name, link, sizeBytes } (link)}
							<DropdownMenu.Item class="cursor-pointer">
								{#snippet child({ props })}
									<a {...props} href={link}>{name} ({fileSize(sizeBytes).human("si")})</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</nav>
