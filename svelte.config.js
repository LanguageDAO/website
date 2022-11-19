import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$assets: resolve('./static/assets'),
			$components: resolve('./src/components'),
			$constants: resolve('./src/constants'),
			$helpers: resolve('./src/helpers'),
			$layout: resolve('./src/layout'),
			$services: resolve('./src/services'),
			$stores: resolve('./src/stores'),
			$types: resolve('./src/types'),
			$util: resolve('./src/util')
		}
	}
};

export default config;
