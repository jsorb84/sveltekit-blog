<script lang="ts">
	import type { Category } from '$lib/types/Category';
	import type { PageData } from './$types';

	export let data: PageData;
	const payload = data.categories;
	const { documents: categories }: { documents: Category[] } = payload;
</script>

<div class="p-4">
	<form method="POST" action="?/create">
		<div class="py-3">
			<input type="text" id="title" name="title" class="input" placeholder="Post Title" />
		</div>
		<div class="py-3">
			<textarea class="textarea" id="body" name="body" placeholder="Post Body" />
		</div>
		<div class="py-3">
			<textarea class="textarea" id="description" name="description" placeholder="Description" />
		</div>
		<select class="select py-3" name="categories" id="categories" multiple>
			{#each categories as cat (cat.$id)}
				<option value={cat.$id}>{cat.name}</option>
			{/each}
		</select>
		<input type="submit" class="btn variant-outline-success" value="Submit" />
	</form>
</div>
