<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		inset,
		variant = "default",
		...restProps
	}: DropdownMenuPrimitive.ItemProps & {
		inset?: boolean;
		variant?: "default" | "destructive";
	} = $props();
</script>

<DropdownMenuPrimitive.Item
	bind:ref
	data-slot="dropdown-menu-item"
	data-inset={inset}
	data-variant={variant}
	class={cn(
		"relative flex h-9 cursor-default items-center gap-2 rounded-[18px] border px-4 py-1.5 text-sm font-medium tracking-tight text-foreground-soft/90 outline-hidden select-none not-focus-visible:border-accent-foreground/15 focus-visible:border-foreground focus-visible:bg-foreground/20 data-highlighted:text-accent-foreground data-highlighted:not-focus-visible:bg-accent/20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:ps-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-soft/90 data-highlighted:[&_svg:not([class*='text-'])]:text-accent-foreground data-[variant=destructive]:*:[svg]:!text-destructive ",
		className
	)}
	{...restProps}
/>
