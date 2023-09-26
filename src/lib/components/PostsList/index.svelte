<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import type { User } from '$lib/types/User';
	import Icon from '@iconify/svelte';
	import PostItem from '$lib/components/PostListItem/index.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let posts: Post[];
	let currentUser = getContext<Writable<User | null>>('currentUser');
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
