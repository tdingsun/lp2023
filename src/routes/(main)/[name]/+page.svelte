<script lang="ts">
  import Page from '../../../lib/components/Page.svelte';
import { currentEntry } from '$lib/stores';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { Entry } from '$lib/types';

	export let data;
	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
	$: currentEntry.set(entry);

onMount(() => {
})
</script>


{#if entry}
	{#key entry.slug}
		<Page></Page>
	{/key}
{/if}