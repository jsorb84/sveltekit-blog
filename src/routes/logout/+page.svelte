<script lang="ts">
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
		throw e;
	}
</script>
