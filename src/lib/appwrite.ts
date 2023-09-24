import { Client, Databases, Account } from 'appwrite';
const client = new Client();

const db = new Databases(client);
const accounts = new Account(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64da5a55e8d4fbe3fc1d');

export default { client, db, accounts };
