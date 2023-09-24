<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import MarkdownComponent from '$lib/components/Markdown/index.svelte';

	export let post: Post;
</script>

<div class="px-5 grid grid-cols-6">
	<div class="col-span-5" use:tocCrawler={{ mode: 'generate', suffix: post.$id }}>
		<MarkdownComponent body={post.body} />
	</div>
	<div class="p-3 h-max">
		<div class="fixed card px-4 py-2">
			<TableOfContents />
		</div>
	</div>
</div>
