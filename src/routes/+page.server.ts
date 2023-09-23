import type { Posts } from '$lib/types/Post';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const posts: Posts = await (await fetch('/api/posts')).json();

	return { posts };
};
