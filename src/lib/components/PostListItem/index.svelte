<script lang="ts">
	import appwrite from '$lib/appwrite';
	import type { Category } from '$lib/types/Category';
	import type { Post } from '$lib/types/Post';
	import type { User } from '$lib/types/User';
	import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let post: Post;
	const date = new Date(post.$createdAt);
	const categories: Category[] = post.categories ?? [];
	let currentUser: Writable<User | null> = getContext<Writable<User | null>>('currentUser');
	const modalStore = getModalStore();
	const toastStore = getToastStore();
	async function handleDelete() {
		new Promise((res, rej) => {
			modalStore.trigger({
				type: 'confirm',
				title: 'Please Confirm:',
				body: 'Are you sure you want to delete this post?',
				response: (r) => {
					if (r) res(r);
					rej();
				}
			});
		}).then(async () => {
			const jwt = await appwrite.accounts.createJWT();
			await fetch(`/api/post/${post.$id}`, { method: 'DELETE', body: JSON.stringify(jwt) });
			toastStore.trigger({
				message: 'Post Deleted Successfully',
				timeout: 3000
			});
		});
	}
</script>

<a
	href={`/post/${post.$id}`}
	class="card card-hover block relative variant-ghost container min-h-[200px] h-[450px] max-h-[600px]"
>
	<header class="card-header">
		<slot name="title" />
		<div class="py-3 flex">
			{#each categories as cat (cat.$id)}
				<div class="px-1 inline-flex">
					<span class="chip bg-gradient-to-br variant-gradient-secondary-primary">{cat.name}</span>
				</div>
			{/each}
		</div>
	</header>
	<span class="px-8">{date.toDateString()}</span>
	<hr class="ml-3 mt-2 w-[65%]" />
	<section class="px-6 static flex-wrap pb-16 max-h-[150px] overflow-scroll"><slot /></section>
	{#if $currentUser !== null}
		<footer class="card-footer absolute py-5 my-auto bottom-0">
			<a href={`/admin/edit/${post.$id}`} class="btn variant-soft-secondary">Edit Post</a>
			<button class="btn variant-soft-error" on:click|preventDefault={handleDelete}
				>Delete Post</button
			>
		</footer>
	{/if}
</a>
