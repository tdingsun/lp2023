<script lang="ts">
	import Song from './Song.svelte';
	import { currentEntry } from '$lib/stores';
	import SvelteMarkdown from 'svelte-markdown';
	$: entry = $currentEntry;
</script>

<div class="overflow-auto px-4">
	{#if entry && entry.introtext}
		<div class="markdown-element py-2 font-serif text-sm w-fit max-w-md tracking-[-0.02rem]">
			<SvelteMarkdown source={entry.introtext}></SvelteMarkdown>
		</div>
		<hr class="border-grey6" />
	{/if}
	{#if entry && entry.songs.length > 0}
		{#each entry.songs as song, idx}
			<Song {song} {idx}></Song>
		{/each}
	{/if}
	{#if entry && entry.miscimages}
		<div
			class="pb-8 flex flex-wrap flex-shrink flex-grow basis-0 min-w-[120px] gap-2 items-start justify-center"
		>
			{#each entry.miscimages as image}
				<img src={image.image} alt="" class="pb-2" />
			{/each}
		</div>
	{/if}
</div>
