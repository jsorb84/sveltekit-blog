<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import type { User } from '$lib/types/User';

	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let posts: Post[];
	let currentUser = getContext<Writable<User | null>>('currentUser');
</script>

{#each posts as post}
	<div>
		<h2 class="gradient-blue">{post.title}</h2>
		{#if $currentUser}
			<div class="py-2">
				<a href={`/admin/edit/${post.$id}`}>🖋️ Edit</a>
			</div>
		{/if}
		<p class="px-4">{post.description}</p>
		<div class="p-4">
			<a href={`/post/${post.$id}`}
				><button class="btn variant-outline-secondary">Read Article..</button></a
			>
		</div>
	</div>
	<hr />
{/each}
