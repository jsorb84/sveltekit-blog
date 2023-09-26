import type { Categories } from '$lib/types/Category';
import { CATEGORIES_COLLECTION, DATABASE_ID } from '$env/static/private';
import { db } from '$lib/appwrite.server';
import type { Category } from '$lib/types/Category';
async function getCategories(): Promise<Categories> {
	const categories: Categories = await db.listDocuments<Category>(
		DATABASE_ID,
		CATEGORIES_COLLECTION
	);
	return categories;
}
export async function GET(): Promise<Response> {
	const categories = await getCategories();
	return new Response(JSON.stringify(categories));
}
