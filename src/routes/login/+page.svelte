<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import * as appwrite from '$lib/appwrite';
	import type { User } from '$lib/types/User';
	import { getContext, setContext } from 'svelte';
	let currentUser: User | undefined;
	$: currentUser = getContext('currentUser');

	let email = '';
	let password = '';
	const handleLogin = async () => {
		const user = appwrite.default.accounts.createEmailSession(email, password).then(() => {
			if (browser) goto('/');
		});
	};
</script>

<div class="p-6 flex text-black">
	<label class="label">
		<span>Input</span>
		<input class="input" placeholder="E-Mail" type="email" bind:value={email} />
	</label>
	<label class="label">
		<span>Input</span>
		<input class="input" placeholder="Password" type="password" bind:value={password} />
	</label>
</div>
<button class="btn variant-filled-primary" type="submit" on:click={handleLogin}>Submit</button>
