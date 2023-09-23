<script lang="ts">
	import '$lib/global.css';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	import { onMount, setContext } from 'svelte';
	import appwrite from '$lib/appwrite';
	import type { User } from '$lib/types/User';
	import { writable, type Writable } from 'svelte/store';
	let usrStore = writable<User | null>(null);
	setContext('currentUser', usrStore);
	onMount(async () => {
		let usr: User = await appwrite.accounts.get();
		usrStore.set(usr);
	});

	const client: QueryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider {client}>
	<AppShell class="dark" regionPage="scroll-smooth">
		<svelte:fragment slot="header">
			<AppBar>
				<svelte:fragment slot="lead"><a href="/">My Blog {$usrStore?.email}</a></svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft" />
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		<!-- (footer) -->
	</AppShell>
</QueryClientProvider>
