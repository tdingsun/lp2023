<script lang="ts">
	import { page } from '$app/stores';
  	import SongThumbnail from './SongThumbnail.svelte';
	import PlayButton from './PlayButton.svelte';
	import SongImages from './SongImages.svelte';
	import SongTitle from './SongTitle.svelte';
	import NumberLabel from './NumberLabel.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { SongEntry } from '$lib/types.js';
	export let song: SongEntry;
	export let idx: number;
</script>

<div id="{$page.params.name}-{idx}" class="border-b border-grey6 text-grey6 last:border-b-0">
	<div class="flex justify-evenly border-b border-inherit relative">
		<NumberLabel number={idx + 1}></NumberLabel>
		<PlayButton embedCode={song.embedCode}></PlayButton>
		<SongThumbnail {song}></SongThumbnail>
	</div>
	<div class="font-serif">
		<SongTitle {song}></SongTitle>
	</div>
	<div class=" font-serif flex gap-4 flex-wrap min-h-[calc(4rem-2px)] pb-4">
		<div class="pt-2 flex-shrink-0 markdown-element text-sm w-fit max-w-md tracking-[-0.02rem]">
			<SvelteMarkdown source={song.description} />
		</div>
			<SongImages {song}></SongImages>
	</div>
</div>
