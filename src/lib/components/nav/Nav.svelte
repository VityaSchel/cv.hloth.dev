<script lang="ts">
	import fileSize from "file-size";
	import { untrack } from "svelte";
	import { Spring } from "svelte/motion";
	import { scrollY } from "svelte/reactivity/window";
	import IconDownload from "@lucide/svelte/icons/download";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import NavButton from "./NavButton.svelte";
	import { setNavContext, NavContext } from "./nav-context.svelte";

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
			// TODO: set stiffness and damping based on scroll delta?
			prevScrollY = scrollY.current;
		}
	});
	let p = $derived(expandProgress.current);
	let pLowCapped = $derived(Math.max(0, p));
	let pClamped = $derived(Math.min(pLowCapped, 1));

	const context = new NavContext();

	$effect(() => {
		context.p = p;
		context.pLowCapped = pLowCapped;
		context.pClamped = pClamped;
	});

	setNavContext(context);
</script>

<nav class="fixed bottom-0 left-0 z-50 flex w-full justify-center">
	<div class="flex w-full max-w-297.5 justify-end p-2">
		<div
			class="flex rounded-full border border-zinc-700/15 bg-(--bg) p-2 shadow-lg backdrop-blur-lg"
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
						<NavButton {...props}>
							{#snippet icon()}
								<IconDownload />
							{/snippet}
							Save
						</NavButton>
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
