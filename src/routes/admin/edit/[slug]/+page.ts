import type { Post } from '$lib/types/Post';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
	const response: Response = await fetch(`/api/post/${params.slug}`);
	const post: Post | null = await response.json();
	console.log(post);
	const categories = (await fetch('/api/categories')).json();
	return { slug: params.slug, post, categories };
};
