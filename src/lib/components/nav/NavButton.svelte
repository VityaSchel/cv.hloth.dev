<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Spring } from "svelte/motion";
	import { getNavContext } from "./nav-context.svelte";

	let {
		icon,
		children,
		accent,
		highlighted,
		...props
	}: {
		icon?: import("svelte").Snippet;
		children?: import("svelte").Snippet;
		accent?: boolean;
		highlighted?: boolean;
	} & import("svelte").ComponentProps<typeof Button> = $props();

	const context = getNavContext();

	let highlightProgress = new Spring(0, {
		stiffness: 0.1,
		damping: 0.25,
		precision: 0.01
	});
	let labelWidth: number | undefined = $state();

	$effect(() => {
		highlightProgress.target = highlighted ? 1 : 0;
	});

	const hpClamped = $derived(Math.min(Math.max(highlightProgress.current, 0), 1));
</script>

<Button
	class="cursor-pointer gap-0 border border-input/(--border-opacity) px-(--padding-inline)! transition-none hover:bg-(--hover-bg)"
	style="
		background-color: color-mix(
			in oklab,
			color-mix(
				in oklab,
				var(--primary) {accent ? context.pClamped * 100 : 0}%,
				var(--input) {accent ? (1 - context.pClamped) * 100 : 100}%
			) 100%,
			transparent
		);
		color: color-mix(
			in oklab,
			black {accent ? hpClamped * context.pClamped * 100 : 0}%,
			color-mix(
				in oklab,
				var(--primary-foreground) {accent ? context.pClamped * 100 : 0}%,
				color-mix(in oklab, var(--color-neutral-100) {80 + hpClamped * 20}%, transparent)
			)
		);
		--border-opacity: {accent ? (1 - context.pClamped) * 100 : 100}%;
		--padding-inline: {9 + context.p * 7}px;
		--hover-bg: color-mix(
			in oklab,
			color-mix(
				in oklab,
				var(--primary) {context.pClamped * 100}%,
				var(--input) {(1 - context.pClamped) * 100}%
			) {context.pClamped * 40 + 50}%,
			transparent
		);
	"
	{...props}
>
	{@render icon?.()}
	<span
		class="inline-block overflow-clip mask-r-from-(--mask-width)"
		style="
			width: {labelWidth ? context.pLowCapped * labelWidth + 'px' : 'auto'};
			--mask-width: {context.pLowCapped * 100}%;
		"
	>
		<span class="w-max ps-2 whitespace-nowrap" bind:offsetWidth={labelWidth}>
			{@render children?.()}
		</span>
	</span>
</Button>
