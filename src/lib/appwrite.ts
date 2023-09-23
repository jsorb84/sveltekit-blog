import { Client, Databases, Account } from 'appwrite';
const client = new Client();

const db = new Databases(client);
const accounts = new Account(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64da5a55e8d4fbe3fc1d');
// "650b25fdadb8ee206fdd", "650b260f2fb4bb45ee58"
export default { client, db, accounts };
