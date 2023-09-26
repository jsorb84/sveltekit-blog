import type { Models } from 'appwrite';

export interface Category extends Models.Document {
	name: string;
}
export type Categories = Models.DocumentList<Category>;
