<script lang="ts">
  import SvelteTipApp from '@system/SvelteTipApp.svelte'
	import Header from '$lib/header/Header.svelte';
</script>

<SvelteTipApp>
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
  </footer>
</SvelteTipApp>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;600;700&family=Roboto:wght@400;600;700&display=swap');

  :root {
    --st-font-one: 'Sen', 'Segoe UI Light', 'Segoe', Tahoma, Helvetica, Arial, sans-serif;
    --st-font-two: 'Roboto', 'Segoe UI Light', 'Segoe', Tahoma, Helvetica, Arial, sans-serif;
  }


	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
