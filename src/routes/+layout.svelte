<script lang="ts">
	import '$lib/global.css';
	import { AppBar, AppShell, Modal, Toast, initializeStores } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
	import { onMount, setContext } from 'svelte';
	import appwrite from '$lib/appwrite';
	import type { User } from '$lib/types/User';
	import { writable } from 'svelte/store';
	initializeStores();
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
	<Modal />
	<Toast />
	<AppShell class="dark" regionPage="scroll-smooth">
		<svelte:fragment slot="header">
			{#if $usrStore !== null}
				<AppBar
					gridColumns="grid-cols-3"
					slotDefault="place-self-center"
					slotTrail="place-self-end"
				>
					<svelte:fragment slot="lead"><a href="/">My Blog</a></svelte:fragment>
					<svelte:fragment slot="default"
						><div class=" inline-flex gap-4">
							<div><a href="/admin/editor">Markdown Editor</a></div>
							<div><a href="/admin/create">New Post</a></div>
						</div></svelte:fragment
					>

					<svelte:fragment slot="trail">
						<div class="flex gap-3">
							{$usrStore?.name}
							<a href="/logout">Logout</a>
						</div>
					</svelte:fragment>
				</AppBar>
			{/if}
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
