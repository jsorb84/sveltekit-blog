<script lang="ts">
	import type { Categories, Category } from '$lib/types/Category';
	import type { PageData } from './$types';

	export let data: PageData;
	const payload: Categories = data.categories;
	const { documents: categories }: { documents: Category[] } = payload;
	let title = data.post ? data.post.title : '';
	let description = data.post ? data.post.description : '';
	let body = data.post ? data.post.body : '';
	let checkedCats: string[] = [];

	data.post?.categories?.map((c) => {
		checkedCats.push(c.$id);
	});
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
			<select bind:value={checkedCats} multiple name="categories" id="categories" class="select">
				{#each categories as cat (cat.$id)}
					<option value={cat.$id}>{cat.name}</option>
				{/each}
			</select>
		</div>
		<div class="py-3">
			<textarea
				class="textarea"
				rows="16"
				bind:value={body}
				id="body"
				name="body"
				placeholder="Post Body"
			/>
		</div>
		<div class="py-3">
			<textarea
				class="textarea"
				rows="4"
				bind:value={description}
				id="description"
				name="description"
				placeholder="Description"
			/>
		</div>
		<input type="submit" class="btn variant-outline-success" value="Submit" />
	</form>
{/if}
