import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		paths: {
			base: process.env.GH_PAGES ? '/nextTab' : '' ,
		},
		appDir: 'app',
	},
};

export default config;
