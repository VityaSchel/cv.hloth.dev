<script lang="ts">
	import { onMount, untrack } from "svelte";
	import { Spring } from "svelte/motion";
	import { setNavContext, NavContext } from "./nav-context.svelte";
	import NavMenu from "./NavMenu.svelte";
	import ContactMenu from "./ContactMenu.svelte";
	import SaveMenu from "./SaveMenu.svelte";
	import IconMessageCircleMore from "@lucide/svelte/icons/message-circle-more";
	import IconDownload from "@lucide/svelte/icons/download";
	import type { DownloadOptions } from "$lib/download-options";
	import SsrNavMenu from "./SsrNavMenu.svelte";
	import { browser } from "$app/environment";

	let {
		downloadOptions
	}: {
		downloadOptions: DownloadOptions;
	} = $props();

	let scrollY: undefined | number = $state(undefined);
	let prevScrollY: undefined | number = $state(undefined);
	let expandProgress = new Spring(1, {
		stiffness: 0.1,
		damping: 0.2,
		precision: 0.01
	});

	let scrollVelocity = new Spring(0, { stiffness: 0.3, damping: 0.5 });

	$effect(() => {
		const prev = untrack(() => prevScrollY);
		if (scrollY !== undefined && prev !== undefined) {
			const delta = scrollY - prev;
			scrollVelocity.target = delta;
		}
		prevScrollY = scrollY;
	});

	$effect(() => {
		const velocity = Math.abs(scrollVelocity.current);

		const velocityThreshold = 50;
		const velocityMult = Math.min(velocity / velocityThreshold, 1);

		expandProgress.damping = 0.15 + (1 - velocityMult) * 0.15;
		expandProgress.stiffness = 0.08 + velocityMult * 0.04;

		expandProgress.target = scrollVelocity.current <= 0 ? 1 : 0;
	});

	let p = $derived(expandProgress.current);
	let pLowCapped = $derived(Math.max(0, p));
	let pClamped = $derived(Math.min(pLowCapped, 1));

	const context = new NavContext();
	let menus = $state({
		contact: false,
		save: false
	});

	$effect(() => {
		context.p = p;
		context.pLowCapped = pLowCapped;
		context.pClamped = pClamped;
	});

	setNavContext(context);

	const xStretchMult = 0.65;
	const yStretchMult = 0.8;
	const overstretch = $derived(Math.max(0, pLowCapped - 1));
	const xStretch = $derived(1 + overstretch * xStretchMult);
	const yStretch = $derived(1 + overstretch * yStretchMult);

	let showSsrNavMenus = $state(true);
	onMount(() => {
		showSsrNavMenus = false;
	});
</script>

<svelte:window
	onscroll={() => {
		scrollY = window.scrollY;
		Object.keys(menus).forEach((key) => (menus[key as keyof typeof menus] = false));
	}}
/>
<nav class="fixed bottom-0 left-0 z-50 flex w-full justify-center">
	<div class="flex w-full max-w-fullsize justify-end p-2">
		<div
			class="z-1 flex origin-right scale-x-(--scale-x) scale-y-(--scale-y) gap-2 rounded-full border border-zinc-700/15 bg-(--bg) p-2 shadow-lg backdrop-blur-lg"
			style="
				--bg: color-mix(
					in oklab,
					color-mix(
						in oklab,
						var(--color-zinc-900) {pClamped * 100}%,
						var(--color-zinc-700) {(1 - pClamped) * 100}%
					) {30 + pClamped * 10}%,
					transparent
				);
				--scale-x: {xStretch * 100}%;
				--scale-y: {100 / yStretch}%;
			"
		>
			<NavMenu bind:open={menus.contact} label="Contact" id="contact">
				{#snippet icon()}
					<IconMessageCircleMore role="img" aria-label="Message icon" />
				{/snippet}
				<ContactMenu />
			</NavMenu>
			<NavMenu bind:open={menus.save} label="Save" accent id="save">
				{#snippet icon()}
					<IconDownload role="img" aria-label="Download icon" />
				{/snippet}
				<SaveMenu {downloadOptions} />
			</NavMenu>
		</div>
		{#if showSsrNavMenus}
			<div
				class="ssr-nav-menus-container pointer-events-none absolute right-2 bottom-15.5 h-32.5 w-56 contain-layout"
			>
				<SsrNavMenu id="contact" align="left" bind:checked={menus.contact}>
					<ContactMenu />
				</SsrNavMenu>
				<SsrNavMenu id="save" align="right" bind:checked={menus.save}>
					<SaveMenu {downloadOptions} />
				</SsrNavMenu>
			</div>
		{/if}
	</div>
</nav>

<style>
	.ssr-nav-menus-container :global(> div) {
		transform: none !important;
		top: auto !important;
		left: auto !important;
		bottom: 0;
	}
</style>
