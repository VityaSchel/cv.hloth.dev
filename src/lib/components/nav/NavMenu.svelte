<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import NavButton from "./NavButton.svelte";

	let {
		open = $bindable(),
		label,
		icon,
		children,
		accent
	}: {
		open?: boolean;
		label: string;
		icon?: import("svelte").Snippet;
		children?: import("svelte").Snippet;
		accent?: boolean;
	} = $props();
</script>

<DropdownMenu.Root bind:open>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<NavButton {...props} {icon} {accent} highlighted={open}>
				{label}
			</NavButton>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content side="top" align="center" preventScroll={false}>
		<DropdownMenu.Group>
			{@render children?.()}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
