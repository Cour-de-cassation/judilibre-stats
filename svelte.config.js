import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		prerender: {
			enabled: false
		},
		ssr: false,
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
