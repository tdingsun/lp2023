<script lang="ts">
	import Song from './Song.svelte';
	import { currentEntry } from '$lib/stores';
	$: entry = $currentEntry;

</script>

{#if entry}
	<h1 class="text-grey6 text-4xl font-serif text-center pt-1 z-10">{entry.name}</h1>
	<hr class="border-grey6 mx-4 -mt-2"/>
	<div class="overflow-auto px-4">
		{#if entry.songs.length > 0}
			{#each entry.songs as song, idx}
				<Song {song} {idx}></Song>
			{/each}
		{/if}
	</div>
{/if}


