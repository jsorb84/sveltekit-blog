import { APPWRITE_API_KEY, APPWRITE_ENDPOINT, APPWRITE_PROJECT } from '$env/static/private';
import { Client, Account, Databases } from 'node-appwrite';

const client = new Client();
const accounts = new Account(client);
const db = new Databases(client);
client
	.setEndpoint(APPWRITE_ENDPOINT)
	.setProject(APPWRITE_PROJECT)
	.setKey(APPWRITE_API_KEY)
	.setSelfSigned(true);

export { client, accounts, db };
