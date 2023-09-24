<script lang="ts">
	import type { Tokens } from 'marked';

	export let token: Tokens.Codespan;
</script>

<span class="inline-block"><code class="pre-custom">{@html token.text}</code></span>

<style>
	.pre-custom {
		overflow-x: auto;
		white-space: nowrap;
		@apply bg-[#f12711] bg-opacity-30;
		padding: 0.15rem /* 16px */;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
			'Courier New', monospace;

		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
		border-radius: var(--theme-rounded-container);
	}
</style>
