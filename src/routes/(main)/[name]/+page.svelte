<script lang="ts">
  import Page from '../../../lib/components/Page.svelte';

	import Song from '../../../lib/components/Song.svelte';
	import { page } from '$app/stores';
	import type { Entry } from '$lib/types.js';

	export let data;
	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
</script>


{#if entry}
{#key entry.slug}
<Page {entry}></Page>

{/key}
{/if}