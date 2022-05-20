import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
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
