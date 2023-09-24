import type { Models } from 'node-appwrite';

export interface Post extends Models.Document {
	title: string;
	body: string;
	description?: string;
}
export type Posts = Models.DocumentList<Post>;
