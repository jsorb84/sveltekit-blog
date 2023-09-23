<script lang="ts">
	import * as appwrite from '$lib/appwrite';
	import type { User } from '$lib/types/User';
	import { getContext, setContext } from 'svelte';
	let currentUser: User | undefined;
	$: currentUser = getContext('currentUser');

	let email = '';
	let password = '';
	const handleLogin = async () => {
		const user = await appwrite.default.accounts.createEmailSession(email, password);
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
