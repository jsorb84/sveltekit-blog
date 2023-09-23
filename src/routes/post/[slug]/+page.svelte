<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import type { Post } from '$lib/types/Post';
	import PostComponent from '$lib/components/Post/index.svelte';
	export let data: PageData;

	const query = createQuery({
		queryKey: ['post', data.slug],
		queryFn: async () => {
			const post = (await fetch(`/api/post/${data.slug}`)).json();
			if ('status' in post && post.status === 404) return { status: 404 };
			return post;
		},
		initialData: data.initialData
	});
	let post: Post | null;
	$: post = $query.data;
</script>

<svelte:head>
	<title>{post?.title} | View Post</title>
</svelte:head>

{#if $query.status === 'error' || post === null}
	Error...
{:else if post !== null}
	<PostComponent {post} />
{/if}
