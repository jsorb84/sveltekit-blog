import type { Models } from 'node-appwrite';
import type { Category } from './Category';

export interface Post extends Models.Document {
	title: string;
	body: string;
	description?: string;
	categories?: Category[];
}
export type Posts = Models.DocumentList<Post>;
