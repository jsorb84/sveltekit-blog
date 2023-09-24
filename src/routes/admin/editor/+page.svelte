<script lang="ts">
	import Markdown from '$lib/components/Markdown/index.svelte';
	let body = '# Change Me';
</script>

<svelte:head>
	<title>Markdown Editor</title>
</svelte:head>

<div class="grid grid-flow-col p-4">
	<div class="grid col-span-1"><Markdown {body} /></div>

	<div class="grid col-span-1"><textarea class="textarea" bind:value={body} /></div>
</div>
