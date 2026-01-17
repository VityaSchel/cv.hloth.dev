<script lang="ts">
	import IconMail from "@lucide/svelte/icons/mail";
	import IconMessageSquareMore from "@lucide/svelte/icons/message-square-more";
	import IconSend from "@lucide/svelte/icons/send-horizontal";
	import SelectableLink from "../SelectableLink.svelte";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<DropdownMenu.Item>
	{#snippet child({ props })}
		<SelectableLink {...props} href="mailto:hi@hloth.dev" title="Email">
			<IconMail role="img" aria-label="Email icon" />
			hi@hloth.dev
		</SelectableLink>
	{/snippet}
</DropdownMenu.Item>
<DropdownMenu.Item>
	{#snippet child({ props })}
		<SelectableLink
			{...props}
			href="https://matrix.to/#/@hloth:hloth.dev"
			title="Matrix"
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconMessageSquareMore role="img" aria-label="Message icon" />
			@hloth:hloth.dev
		</SelectableLink>
	{/snippet}
</DropdownMenu.Item>
<DropdownMenu.Item>
	{#snippet child({ props })}
		<SelectableLink
			{...props}
			href="https://t.me/hlothdev"
			title="Telegram"
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconSend role="img" aria-label="Send icon" />
			@hlothdev
		</SelectableLink>
	{/snippet}
</DropdownMenu.Item>
