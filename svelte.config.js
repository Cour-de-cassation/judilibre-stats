import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		appDir: 'internal',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			ssr: {
				noExternal: ['chart.js']
			},
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
