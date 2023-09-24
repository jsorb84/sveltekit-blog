<script lang="ts">
	import type { Tokens } from 'marked';
	export let token: Tokens.Heading;
</script>

<svelte:element this={`h${token.depth}`} class={`h${token.depth}`}><slot /></svelte:element
><svelte:element this={token.depth == 2 ? 'hr' : null} class="w-[40%] pb-4" />

<style>
	h1 {
		@apply h1;
		@apply variant-outline-tertiary rounded-md p-4 text-center;
		@apply bg-clip-text;
		@apply text-transparent;
		@apply bg-gradient-to-br;
		@apply from-[#FC466B];
		@apply to-[#3F5EFB];
		@apply font-extrabold;
	}
	h2 {
		@apply h2;
		@apply bg-clip-text;
		@apply divide-solid divide-y;
		@apply text-transparent;
		@apply bg-gradient-to-br;
		@apply from-[#ee0979];
		@apply to-[#ff6a00];
		@apply font-extrabold;
	}
	h3 {
		@apply h3;
		@apply text-2xl;
		@apply pt-5;
	}
</style>
