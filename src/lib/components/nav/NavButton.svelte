<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { getNavContext } from "./nav-context.svelte";

	let {
		icon,
		children,
	}: {
		icon?: import("svelte").Snippet;
		children?: import("svelte").Snippet;
	} = $props();

	const context = getNavContext();

	let labelWidth = $state(0);
</script>

<Button
	class="cursor-pointer gap-0 border border-input/(--border-opacity) bg-primary/(--bg-opacity) px-(--padding-inline)! transition-none hover:bg-(--hover-bg)"
	style="
		--bg-opacity: {context.pClamped * 100}%;
		color: color-mix(
			in oklab,
			var(--primary-foreground) {context.pClamped * 100}%,
			color-mix(in oklab, var(--color-neutral-100) 80%, transparent)
		);
		--border-opacity: {(1 - context.pClamped) * 100}%;
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
>
	{@render icon?.()}
	<span
		class="overflow-clip mask-r-from-(--mask-width)"
		style="
			width: {context.pLowCapped * labelWidth}px;
			--mask-width: {context.pLowCapped * 100}%;
		"
	>
		<span class="w-max ps-2 whitespace-nowrap" bind:offsetWidth={labelWidth}>
			{@render children?.()}
		</span>
	</span>
</Button>
