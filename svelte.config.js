import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: () => ({
			resolve: {
				alias: {
					// SVELTETIP ALIASES
					'@button': path.resolve('./src/lib/SvelteTip/@Buttons'),
					'@cards': path.resolve('./src/lib/SvelteTip/@Cards'),
					'@chart': path.resolve('./src/lib/SvelteTip/@Charts'),
					'@examples': path.resolve('./src/lib/SvelteTip/@Examples'),
					'@external': path.resolve('./src/lib/SvelteTip/@External'),
					'@form': path.resolve('./src/lib/SvelteTip/@Form'),
					'@images': path.resolve('./src/lib/SvelteTip/@Images'),
					'@layout': path.resolve('./src/lib/SvelteTip/@Layout'),
					'@link': path.resolve('./src/lib/SvelteTip/@Links'),
					'@panel': path.resolve('./src/lib/SvelteTip/@Panels'),
					'@shopping': path.resolve('./src/lib/SvelteTip/@Shopping'),
					'@system': path.resolve('./src/lib/SvelteTip/@System'),
					'@text': path.resolve('./src/lib/SvelteTip/@Text'),
					'@utility': path.resolve('./src/lib/SvelteTip/@Utility'),
					// SVELTETIP SUPPORTING FILES
					'@st-stores': path.resolve('./src/lib/SvelteTip/stores'),
					'@st-js': path.resolve('./src/lib/SvelteTip/js'),
				},
			},
		}),
	},
};

export default config;
