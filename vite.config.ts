import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
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
