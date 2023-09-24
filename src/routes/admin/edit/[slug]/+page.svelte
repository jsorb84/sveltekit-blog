<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';

	export let data: PageData;
	let title = data.post ? data.post.title : '';
	let description = data.post ? data.post.description : '';
	let body = data.post ? data.post.body : '';
</script>

{#if data.post === null}
	No Post Found
{:else}
	<form class="p-4" method="POST" action="?/editPost">
		<div class="py-3">
			<input readonly type="text" id="id" name="id" class="input" value={data.slug} />
		</div>
		<div class="py-3">
			<input
				type="text"
				id="title"
				bind:value={title}
				name="title"
				class="input"
				placeholder="Post Title"
			/>
		</div>
		<div class="py-3">
			<textarea class="textarea" bind:value={body} id="body" name="body" placeholder="Post Body" />
		</div>
		<div class="py-3">
			<textarea
				class="textarea"
				bind:value={description}
				id="description"
				name="description"
				placeholder="Description"
			/>
		</div>
		<input type="submit" class="btn variant-outline-success" value="Submit" />
	</form>
{/if}
