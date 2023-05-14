import { defineConfig } from 'astro/config';
import * as path from 'path';

// https://astro.build/config
export default defineConfig({
	getViteConfig: {
		resolve: {
			alias: [
				{
					find: '@components/*',
					replacement: path.resolve('src/components/*'),
				},
				{
					find: '@layouts/*',
					replacement: path.resolve('src/layouts/*'),
				},
			],
		},
	},
});
