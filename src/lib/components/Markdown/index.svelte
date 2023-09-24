<script lang="ts">
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import { marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import Markdown from '@magidoc/plugin-svelte-marked';
	import CodeBlock from '$lib/components/CodeBlock/index.svelte';
	import CodeSpan from '$lib/components/CodeSpan/index.svelte';
	import BlockQuote from '$lib/components/BlockQuote/index.svelte';
	import PrimaryHeading from '$lib/components/PrimaryHeading/index.svelte';
	storeHighlightJs.set(hljs);

	marked.use(
		markedHighlight({
			langPrefix: 'lang-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';

				return hljs.highlight(code, {
					language
				}).value;
			}
		})
	);
	export let body: string;
</script>

<div class="p-6">
	<pre class="whitespace-pre-wrap">
        <Markdown
			source={body}
			renderers={{
				code: CodeBlock,
				codespan: CodeSpan,
				blockquote: BlockQuote,
				h1: PrimaryHeading,
				heading: PrimaryHeading
			}}
		/>
    </pre>
</div>
