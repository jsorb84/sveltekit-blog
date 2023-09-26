<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import appwrite from '$lib/appwrite';
	import { redirect } from '@sveltejs/kit';
	try {
		appwrite.accounts
			.deleteSession('current')
			.then(() => {
				return redirect(301, '/');
			})
			.catch((e) => console.error(e));
	} catch (e) {
		console.error(e);
		if (browser) throw goto('/');
	}
	if (browser) throw goto('/');
</script>
