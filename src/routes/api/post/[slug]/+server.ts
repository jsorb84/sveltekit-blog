import { DATABASE_ID, POSTS_COLLECTION } from '$env/static/private';
import { db } from '$lib/appwrite.server.js';
import type { Post } from '$lib/types/Post.js';
import type { Models } from 'node-appwrite';
async function getPost(documentId: string): Promise<Models.Document | null> {
	try {
		const posts: Models.Document = await db.getDocument(DATABASE_ID, POSTS_COLLECTION, documentId);
		return posts;
	} catch (err) {
		console.error(err);
		return null;
	}
}

export async function GET({ params }) {
	const post: Post | null = (await getPost(params.slug)) as Post;
	if (post === null) return new Response(JSON.stringify(null));

	return new Response(JSON.stringify(post));
}
