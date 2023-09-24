<script lang="ts">
	import type { User } from '$lib/types/User';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let currentUser = getContext<Writable<User | null>>('currentUser');
</script>

{#if !$currentUser}
	<h1>Admin Only!</h1>
{:else}
	<slot />
{/if}
