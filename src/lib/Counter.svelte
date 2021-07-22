<script lang="ts">
  import SVG from '@text/SVG.svelte'
  import Button from '@button/Button.svelte'

	let count = 0;

</script>

<div class="counter">
  <Button applyTheme='primary' hollow onClick={() => (count -= 1)} style='min-width: 100px'>
    <SVG icon='minus' fill='black' />
  </Button>

  <h1>{count}</h1>

  <Button applyTheme='primary' hollow onClick={() => (count += 1)} style='min-width: 100px'>
    <SVG icon='plus' fill='black' />
  </Button>
</div>

<style>
	.counter {
		display: flex;
		margin: 1rem 0;
    gap: 10px;
	}
</style>
