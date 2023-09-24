<script lang="ts">
	import type { Tokens } from 'marked';

	export let token: Tokens.Link;
</script>

<a class="" href={token.href} target="_blank"><slot /></a>
