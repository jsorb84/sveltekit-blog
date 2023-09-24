<script lang="ts">
	import type { Tokens } from 'marked';
	export let token: Tokens.Heading;
</script>

<svelte:element this={`h${token.depth}`} class={`h${token.depth}`}><slot /></svelte:element>
{#if token.depth === 1}
	<hr class="pb-3" />
{/if}

<style>
	h1 {
		@apply h1;
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
		@apply text-transparent;
		@apply bg-gradient-to-br;
		@apply from-[#ee0979];
		@apply to-[#ff6a00];
		@apply font-extrabold;
	}
	h3 {
		@apply h3;
	}
</style>
