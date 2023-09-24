<script lang="ts">
	import type { Tokens } from 'marked';
	export let token: Tokens.Blockquote;
</script>

<div class="p-3"><blockquote class="blockquote bg-[#171618]">{token.text}</blockquote></div>
