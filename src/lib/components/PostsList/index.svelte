<script lang="ts">
	import type { Post } from '$lib/types/Post';

	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	export let posts: Post[];
	let value: string = 'post';
</script>

{#each posts as post}
	<div>
		<h2 class="gradient-blue">{post.title}</h2>
		<p class="px-4">{post.description}</p>
		<div class="p-4">
			<a href={`/post/${post.$id}`}
				><button class="btn variant-outline-secondary">Read Article..</button></a
			>
		</div>
	</div>
	<hr />
{/each}
