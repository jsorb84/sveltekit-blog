import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		require('@tailwindcss/typography'),
		skeleton({
			themes: {
				preset: [
					{ name: 'skeleton', enhancements: true },
					{ name: 'gold-nouveau', enhancements: true }
				]
			}
		})
	]
};
