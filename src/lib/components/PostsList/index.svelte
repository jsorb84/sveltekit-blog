<script lang="ts">
	import type { Post } from '$lib/types/Post';

	import PostItem from '$lib/components/PostListItem/index.svelte';

	export let posts: Post[];
</script>

<div class="grid grid-cols-3 gap-8">
	{#each posts as post}
		<PostItem {post}>
			<span
				slot="title"
				class="gradient-text bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] text-4xl font-bold"
				>{post.title}</span
			>
			<div class="font-light">{post.description}</div>
		</PostItem>
	{/each}
</div>
