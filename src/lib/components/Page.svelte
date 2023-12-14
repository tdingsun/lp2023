<script lang="ts">
	import Song from './Song.svelte';
	import { page } from '$app/stores';
	import type { Entry, SongEntry } from '$lib/types.js';
	import { addToEmbedCodeList, getEmbedCodeList } from '$lib/stores';
	export let entry: Entry;

	if(!getEmbedCodeList($page.params.name)){
		let embedCodes = entry.songs.map((song: SongEntry) => song.link.split('v=').at(-1));
		addToEmbedCodeList($page.params.name, embedCodes);
	}
	
</script>

<h1 class="text-grey6 text-4xl font-serif text-center pt-1 tracking-tighter z-10">{entry.name}</h1>
<hr class="border-grey6 mx-4 -mt-2"/>
<div class="overflow-auto px-4">
	{#if entry.songs && entry.songs.length > 0}
		{#each entry.songs as song, idx}
			<Song {entry} {song} {idx}></Song>
		{/each}
	{/if}
</div>

