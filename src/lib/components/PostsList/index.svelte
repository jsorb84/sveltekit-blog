<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import type { User } from '$lib/types/User';
	import Icon from '@iconify/svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let posts: Post[];
	let currentUser = getContext<Writable<User | null>>('currentUser');
</script>

{#each posts as post}
	<div>
		<h2 class="gradient-blue">{post.title}</h2>

		<p class="px-4">{post.description}</p>
		<div class="inline-flex gap-2">
			<a href={`/post/${post.$id}`}
				><button class="btn variant-outline-secondary">Read Article..</button></a
			>
			{#if $currentUser}
				<a href={`/admin/edit/${post.$id}`}
					><button class="btn variant-outline-tertiary"
						><Icon icon="mdi:view-dashboard-edit" /> Edit Article</button
					></a
				>
			{/if}
		</div>
	</div>
	<hr />
{/each}
