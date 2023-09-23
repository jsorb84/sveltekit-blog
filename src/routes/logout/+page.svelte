<script lang="ts">
	import appwrite from '$lib/appwrite';
	import { redirect } from '@sveltejs/kit';
	try {
		appwrite.accounts
			.deleteSession('current')
			.then(() => {
				console.log('DOne');
			})
			.catch((e) => console.error(e));
	} catch (e) {
		throw e;
	}
</script>
