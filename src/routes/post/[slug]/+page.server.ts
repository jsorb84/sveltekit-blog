import type { Post } from '$lib/types/Post';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
	const post: Post | null = await fetch(`/api/post/${params.slug}`).then((p) => p.json());
	return { slug: params.slug, initialData: post };
};
