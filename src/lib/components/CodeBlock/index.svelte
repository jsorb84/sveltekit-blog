<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import type { Tokens } from 'marked';
	import 'highlight.js/styles/atom-one-light.css';
	export let token: Tokens.Code;
</script>

<CodeBlock code={token.text} language={token.lang} />
