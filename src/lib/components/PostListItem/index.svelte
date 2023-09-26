<script lang="ts">
	import type { Post } from '$lib/types/Post';
	export let post: Post;
</script>

<a
	href={`/post/${post.$id}`}
	class="card card-hover variant-ghost container min-h-[200px] max-h-[300px]"
>
	<header class="card-header flex"><slot name="title" /></header>
	<hr class="ml-3 mt-2 w-[65%]" />
	<section class="px-6 m-auto h-max overflow-scroll"><slot /></section>
	<footer class="card-footer mt-auto">fff</footer>
</a>
