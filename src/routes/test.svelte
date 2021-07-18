<script>
  import ThemeWrapper from '@layout/ThemeWrapper.svelte'
  import Container from '@layout/Container.svelte'
  import Section from '@layout/Section.svelte'
  import LoremBlock from '@utility/LoremBlock.svelte'
</script>


<ThemeWrapper>
	<Container>
			<Section nomargin>
				<section class="section-wrap">
					<h2 class="about-title">What is SvelteTip?</h2>
          <LoremBlock ignoreTheme />
				</section>
			</Section>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
			<Section nomargin>
				<section class="section-wrap">
					<h2 class="about-title">What is SvelteTip?</h2>
          <LoremBlock ignoreTheme />
				</section>
			</Section>
	</Container>
</ThemeWrapper>