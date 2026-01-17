<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	let {
		children,
		id,
		align,
		checked = $bindable()
	}: {
		children?: import("svelte").Snippet;
		id: string;
		align: "left" | "right";
		checked: boolean;
	} = $props();
</script>

<input
	autocomplete="off"
	type="checkbox"
	id="navbar-menu-{id}"
	class={[
		"pointer-events-none absolute h-0 w-0 opacity-0",
		{
			"align-menu-left": align === "left",
			"align-menu-right": align === "right"
		}
	]}
	bind:checked
/>
<DropdownMenu.Root open>
	<DropdownMenu.Content
		side="top"
		align="center"
		preventScroll={false}
		portal={false}
		class="pointer-events-auto"
	>
		<DropdownMenu.Group>
			{@render children?.()}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<style>
	input:checked + :global(div) {
		display: block;
	}
	input + :global(div) {
		display: none;
	}
	.align-menu-left + :global(div) {
		left: 0 !important;
	}
	.align-menu-right + :global(div) {
		right: 0 !important;
	}
</style>
