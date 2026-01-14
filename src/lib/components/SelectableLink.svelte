<script lang="ts">
	import { browser } from "$app/environment";
	import { untrack } from "svelte";

	let {
		children,
		...props
	}: {
		children?: import("svelte").Snippet;
	} & import("svelte/elements").SvelteHTMLElements["a"] = $props();

	let selecting = $state(false);
</script>

<a
	{...props}
	class={[
		"select-text",
		props.class,
		{
			"cursor-text": selecting,
			"cursor-pointer": !selecting
		}
	]}
	draggable="false"
	onpointerdown={() => {
		const onPointerMove = () => {
			selecting = true;
		};
		const onPointerUp = (e: PointerEvent) => {
			e.stopPropagation();
			setTimeout(() => (selecting = false), 0);
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointermove", onPointerMove);
		};
		window.addEventListener("pointerup", onPointerUp, { capture: true });
		window.addEventListener("pointermove", onPointerMove);
	}}
	onclick={(e) => {
		if (selecting) e.preventDefault();
	}}
>
	{@render children?.()}
</a>
