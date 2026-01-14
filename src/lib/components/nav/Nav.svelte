<script lang="ts">
	import fileSize from "file-size";
	import { untrack } from "svelte";
	import { Spring } from "svelte/motion";
	import IconMessageCircleMore from "@lucide/svelte/icons/message-circle-more";
	import IconDownload from "@lucide/svelte/icons/download";
	import IconMail from "@lucide/svelte/icons/mail";
	import IconMessageSquareMore from "@lucide/svelte/icons/message-square-more";
	import IconSend from "@lucide/svelte/icons/send-horizontal";
	import IconFile from "@lucide/svelte/icons/file";
	import IconFileImage from "@lucide/svelte/icons/file-image";
	import IconImage from "@lucide/svelte/icons/image";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { setNavContext, NavContext } from "./nav-context.svelte";
	import SelectableLink from "../SelectableLink.svelte";
	import NavMenu from "./NavMenu.svelte";

	let {
		downloadOptions
	}: {
		downloadOptions: {
			name: string;
			filename: string;
			link: string;
			sizeBytes: number;
		}[];
	} = $props();

	let scrollY: undefined | number = $state(undefined);
	let prevScrollY: undefined | number = $state(undefined);
	let expandProgress = new Spring(1, {
		stiffness: 0.1,
		damping: 0.25,
		precision: 0.01
	});

	$effect(() => {
		const prev = untrack(() => prevScrollY);
		if (scrollY !== undefined) {
			if (prev !== undefined) {
				expandProgress.target = scrollY < prev ? 1 : 0;
				// TODO: set stiffness and damping based on scroll delta?
			}
			prevScrollY = scrollY;
		}
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
</script>

<svelte:window
	onscroll={() => {
		scrollY = window.scrollY;
		Object.keys(menus).forEach((key) => (menus[key as keyof typeof menus] = false));
	}}
/>
<nav class="fixed bottom-0 left-0 z-50 flex w-full justify-center">
	<div class="flex w-full max-w-297.5 justify-end p-2">
		<div
			class="flex gap-2 rounded-full border border-zinc-700/15 bg-(--bg) p-2 shadow-lg backdrop-blur-lg"
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
			"
		>
			<NavMenu bind:open={menus.contact} label="Contact">
				{#snippet icon()}
					<IconMessageCircleMore />
				{/snippet}
				<DropdownMenu.Item>
					{#snippet child({ props })}
						<SelectableLink {...props} href="mailto:hi@hloth.dev" title="Email">
							<IconMail />
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
							<IconMessageSquareMore />
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
							<IconSend />
							@hlothdev
						</SelectableLink>
					{/snippet}
				</DropdownMenu.Item>
			</NavMenu>
			<NavMenu bind:open={menus.save} label="Save" accent>
				{#snippet icon()}
					<IconDownload />
				{/snippet}
				{#each downloadOptions as { name, filename, link, sizeBytes } (link)}
					<DropdownMenu.Item>
						{#snippet child({ props })}
							<a {...props} href={link} class={["cursor-pointer", props.class]} download={filename}>
								{#if name === "PDF"}
									<IconFile />
								{:else if name === "AVIF"}
									<IconImage />
								{:else if name === "JPEG"}
									<IconFileImage />
								{:else}
									<IconDownload />
								{/if}
								{name} ({fileSize(sizeBytes).human("si")})
							</a>
						{/snippet}
					</DropdownMenu.Item>
				{/each}
			</NavMenu>
		</div>
	</div>
</nav>
