<script lang="ts">
  import PlayButton from './PlayButton.svelte';

  import SongImages from './SongImages.svelte';

	import SongTitle from './SongTitle.svelte';
	import NumberLabel from './NumberLabel.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import type { Entry, SongEntry } from '$lib/types.js';
	import { currentEmbedCode } from '$lib/stores'
	export let song: SongEntry;
	export let idx: number;
	let embedCode = song.link.split('v=').at(-1);
</script>

<div class="border-b border-grey6 text-grey6 last:border-b-0">
	<div class="flex justify-evenly border-b border-inherit relative">
		<NumberLabel number={idx + 1}></NumberLabel>
		<PlayButton {song}></PlayButton>
			<div 
			style="background-image: url(http://i.ytimg.com/vi/{embedCode}/default.jpg);
			background-position: center center;
			background-size: 180%;
			"
			class="h-[calc(2rem-2px)] w-[calc(2rem-2px)] absolute left-0">
			</div>
		
	</div>

	<div class="font-serif">
		<SongTitle {song}></SongTitle>
	</div>
	<div class=" font-serif flex gap-2 flex-wrap min-h-[calc(4rem-2px)] pt-2 pb-4">
		<div class="flex-shrink-0 markdown-element text-sm w-fit max-w-md tracking-[-0.02rem]">
			<SvelteMarkdown source={song.description} />
		</div>
		<SongImages {song}></SongImages>

	</div>
		
</div>
