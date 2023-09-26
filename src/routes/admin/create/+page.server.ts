import type { Actions } from '@sveltejs/kit';
import { db } from '$lib/appwrite.server';
import { ID } from 'node-appwrite';
import { DATABASE_ID, POSTS_COLLECTION } from '$env/static/private';
import type { Post } from '$lib/types/Post';
async function createPost(data: {
	title: FormDataEntryValue;
	body: FormDataEntryValue;
	description: FormDataEntryValue;
	categories?: FormDataEntryValue[];
}): Promise<Post> {
	const newPost: Post = await db.createDocument(DATABASE_ID, POSTS_COLLECTION, ID.unique(), data);
	return newPost;
}

export const actions: Actions = {
	create: async ({ request }) => {
		const data: FormData = await request.formData();
		const title: FormDataEntryValue | null = data.get('title');
		const body: FormDataEntryValue | null = data.get('body');
		const description: FormDataEntryValue | null = data.get('description');
		const categories: FormDataEntryValue[] = data.getAll('categories');

		if (title && description && body) {
			const newObject = { title, body, description, categories };
			const newPost: Post = await createPost(newObject);
			console.log(newPost);
		}
	}
};
