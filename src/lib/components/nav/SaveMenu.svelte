<script lang="ts">
	import fileSize from "file-size";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import IconFile from "@lucide/svelte/icons/file";
	import IconFileImage from "@lucide/svelte/icons/file-image";
	import IconImage from "@lucide/svelte/icons/image";
	import IconDownload from "@lucide/svelte/icons/download";
	import type { DownloadOptions } from "$lib/download-options";

	let {
		downloadOptions
	}: {
		downloadOptions: DownloadOptions;
	} = $props();
</script>

{#each downloadOptions as { name, filename, link, sizeBytes } (link)}
	<DropdownMenu.Item>
		{#snippet child({ props })}
			<a {...props} href={link} class={["cursor-pointer", props.class]} download={filename}>
				{#if name === "PDF"}
					<IconFile role="img" aria-label="File icon" />
				{:else if name === "AVIF"}
					<IconImage role="img" aria-label="Image icon" />
				{:else if name === "JPEG"}
					<IconFileImage role="img" aria-label="Image icon" />
				{:else}
					<IconDownload role="img" aria-label="Download icon" />
				{/if}
				{name} ({fileSize(sizeBytes).human("si")})
			</a>
		{/snippet}
	</DropdownMenu.Item>
{/each}
