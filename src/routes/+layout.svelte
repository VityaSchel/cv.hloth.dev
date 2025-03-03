<script lang="ts">
	import '../app.css'
	let { children } = $props()
</script>

<main class="wrapper">
	{@render children()}
</main>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 64px 0;
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		// text-align: center;

		@media screen and (max-width: 1024px) {
			justify-content: space-evenly;
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;
		}
	}
</style>