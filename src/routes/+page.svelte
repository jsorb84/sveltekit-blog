


<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import * as appwrite from '$lib/appwrite'
	import type {Models} from 'appwrite'
	import type { PageData } from './$types';
	import type { Post } from '$lib/types/Post';
	import PostsList from '$lib/components/PostsList/index.svelte'
	export let data: PageData;
	const posts: Post[] = data.posts.documents;
	const postCount: number = data.posts.total;
	let currentUser: Models.User<Models.Preferences> | null | undefined = null;
	try {
		appwrite.default.accounts.get().then((s) => {
			
			currentUser = s;
		}).catch((e) => console.error(e))
		
	} catch (e) {
		console.error(e);
	}

	//console.log(appwrite.default.accounts.get())
</script>

{#if currentUser}
	<div class="container dark mx-auto p-8 space-y-8">
		<h1 class="h1">Hello Skeleton {currentUser.name}</h1>
		<PostsList {posts} />
	</div>
{:else}
	<div class='p-4 mx-auto self-center'><ProgressRadial /></div>
{/if}