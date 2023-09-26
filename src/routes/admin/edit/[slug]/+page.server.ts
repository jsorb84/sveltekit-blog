import { DATABASE_ID, POSTS_COLLECTION } from '$env/static/private';
import { db } from '$lib/appwrite.server';

import type { Actions } from '@sveltejs/kit';

async function processEdit(
	data: {
		title: FormDataEntryValue;
		body: FormDataEntryValue;
		description: FormDataEntryValue | null;
		categories: FormDataEntryValue[] | null;
	},
	id: string
): Promise<void> {
	try {
		await db.updateDocument(DATABASE_ID, POSTS_COLLECTION, id, data);
	} catch (e) {
		console.error(e);
	}
}

export const actions: Actions = {
	async editPost({ request }) {
		const data: FormData = await request.formData();
		const title: FormDataEntryValue | null = data.get('title');
		const body: FormDataEntryValue | null = data.get('body');
		const description: FormDataEntryValue | null = data.get('description');
		const categories: FormDataEntryValue[] | null = data.getAll('categories');
		const id: string = data.get('id') as string;

		if (title && body && id) {
			await processEdit({ title, body, description, categories }, id);
		}
	}
};
