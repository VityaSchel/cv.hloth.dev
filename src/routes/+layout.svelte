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
		padding: 32px;
		max-width: 1280px;
		margin: 0 auto;
		// text-align: center;

		@media screen and (max-width: 1024px) {
			justify-content: space-evenly;
		}

		@media screen and (max-width: 900px) {
			flex-direction: column;
		}

		@media screen and (max-width: 400px) {
			padding: 16px;
		}
	}
</style>