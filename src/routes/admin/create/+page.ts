import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const categories = (await fetch('/api/categories')).json();
	return { categories };
};
