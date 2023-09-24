import type { Models } from 'node-appwrite';
import { ID } from 'node-appwrite';
import type { Post } from '$lib/types/Post';
import { db } from '$lib/appwrite.server.js';
import { Query } from 'appwrite';
import { DATABASE_ID, POSTS_COLLECTION } from '$env/static/private';
async function getPosts(): Promise<Models.DocumentList<Post>> {
	const posts: Models.DocumentList<Post> = await db.listDocuments(DATABASE_ID, POSTS_COLLECTION, [
		Query.orderDesc('$createdAt')
	]);

	return posts;
}
export async function POST({ request }): Promise<Response> {
	await db.createDocument(DATABASE_ID, POSTS_COLLECTION, ID.unique(), await request.json());
	return new Response();
}
export async function GET(): Promise<Response> {
	const posts: Models.DocumentList<Post> = await getPosts();
	return new Response(JSON.stringify(posts));
}
