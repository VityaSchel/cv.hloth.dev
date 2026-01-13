<script>
	import Resume from "./Resume.svelte";

	const title = "Viktor Shchelochkov resume & CV";
	const description = "Visit the website to download Viktor Shchelochkov aka hloth's resume & CV";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://cv.hloth.dev/" />
</svelte:head>

<main class="w-full py-8">
	<Resume />
</main>
