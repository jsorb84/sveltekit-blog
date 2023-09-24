<script lang="ts">
	import { getContext, onMount } from 'svelte';

	import type { Posts } from '$lib/types/Post';
	import { createQuery } from '@tanstack/svelte-query';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import PostsList from '$lib/components/PostsList/index.svelte';
	import type { User } from '$lib/types/User';
	import type { Writable } from 'svelte/store';
	let currentUser = getContext<Writable<User | null>>('currentUser');

	const query = createQuery<Posts>({
		queryKey: ['posts'],
		queryFn: async () => {
			return (await fetch('/api/posts')).json();
		}
	});
</script>

{#if $query.status == 'success'}
	<div class="container dark mx-auto p-8 space-y-8">
		<h1 class="h1">Recent Posts</h1>

		{#if $query.status == 'success'}
			<PostsList posts={$query.data.documents} />
		{/if}
	</div>
{:else if $query.status === 'error'}
	Error Loading.
{:else}
	<div class="p-4 mx-auto self-center"><ProgressRadial /></div>
{/if}
