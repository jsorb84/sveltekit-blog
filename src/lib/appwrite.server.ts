import { Client, Account, Databases } from 'node-appwrite';

const client = new Client();
const apiKey =
	'32f37962c97505cec4a671f2b38c11f1f43bbef8d4011af277c5f45889a096118c556fc1e3c1040f2d2ccaa7b43404213ca9a4c6d9ddfdcf316f900a2bc592928c9bc9bd48f2c230be2f9c5449123036787a2fe2aa7e448064bf14fdd1b11061833787c673cffa334009b880b48deec1cc80a402f19715a6eafe168ba1e8e46e';
const accounts = new Account(client);
const db = new Databases(client);
client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('64da5a55e8d4fbe3fc1d')
	.setKey(apiKey)
	.setSelfSigned(true);

export { client, accounts, db };
