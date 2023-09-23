<script lang='ts'>
import '$lib/global.css'
import { AppBar, AppShell } from '@skeletonlabs/skeleton';
import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
    </script>

<AppShell class="dark">
	<svelte:fragment slot="header"><AppBar >Hello</AppBar></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><TableOfContents /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>