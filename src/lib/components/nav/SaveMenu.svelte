<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import IconFile from "@lucide/svelte/icons/file";
	import IconFileImage from "@lucide/svelte/icons/file-image";
	import IconImage from "@lucide/svelte/icons/image";
	import IconDownload from "@lucide/svelte/icons/download";
	import type { DownloadOptions } from "$lib/download-options";
	import fileSize from "file-size";

	let {
		downloadOptions
	}: {
		downloadOptions: DownloadOptions;
	} = $props();
</script>

{#each downloadOptions as { name, filename, link, sizeBytes } (link)}
	<DropdownMenu.Item>
		{#snippet child({ props })}
			<a {...props} href={link} class={["cursor-pointer pr-1.75", props.class]} download={filename}>
				{#if name === "PDF"}
					<IconFile role="img" aria-label="File icon" />
				{:else if name === "AVIF"}
					<IconImage role="img" aria-label="Image icon" />
				{:else if name === "JPEG"}
					<IconFileImage role="img" aria-label="Image icon" />
				{:else}
					<IconDownload role="img" aria-label="Download icon" />
				{/if}
				{name}
				<span class="ml-auto rounded-full bg-zinc-300/20 px-1.5 py-0.5 text-xs font-semibold">
					<!-- {(Math.round((sizeBytes / 1000 / 1000) * 2) / 2).toFixed(1)} MB -->
					{fileSize(sizeBytes, {
						fixed: 0
					}).human("si").toString()}
				</span>
			</a>
		{/snippet}
	</DropdownMenu.Item>
{/each}
