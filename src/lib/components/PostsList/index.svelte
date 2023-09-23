<script lang="ts">
	import type { Post } from '$lib/types/Post';


import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
export let posts: Post[];
let value: string = 'post';
</script>

<div class='card p-4'>
    <ListBox>
        {#each posts as post}
            <ListBoxItem bind:group={value} value={post.title} name='post_title'>{post.title}</ListBoxItem>
        {/each}
    </ListBox>
</div>
