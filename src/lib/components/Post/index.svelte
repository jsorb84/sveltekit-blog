<script lang="ts">
	import type { Post } from '$lib/types/Post';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import MarkdownComponent from '$lib/components/Markdown/index.svelte';
	const indentStyles = {
		h2: 'font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-[#ee0979] to-[#ff6a00]',
		h3: 'ml-4 font-thin text-white',
		h4: 'ml-8',
		h5: 'ml-12',
		h6: 'ml-16'
	};
	export let post: Post;
</script>

<div class="px-5 grid grid-cols-6">
	<div
		class="col-span-5"
		use:tocCrawler={{ mode: 'generate', suffix: post.$id, scrollTarget: '#page' }}
	>
		<MarkdownComponent body={post.body} />
	</div>
	<div class="p-3">
		<div class="fixed overflow-y-scroll card px-4 py-2">
			<TableOfContents {indentStyles} class="h-[550px] hide-scrollbar overflow-scroll"
				>Table of Content</TableOfContents
			>
		</div>
	</div>
</div>
