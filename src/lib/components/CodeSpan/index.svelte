<script lang="ts">
	import type { Tokens } from 'marked';

	export let token: Tokens.Codespan;
</script>

<code class="code">{token.text}</code>
