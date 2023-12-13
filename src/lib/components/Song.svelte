<script lang="ts">
  import SongImages from './SongImages.svelte';

	import SongTitle from './SongTitle.svelte';
	import SongPlayer from './SongPlayer.svelte';
	import NumberLabel from './NumberLabel.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import type { SongEntry } from '$lib/types.js';
	import { currentEmbedCode } from '$lib/stores'
	export let song: SongEntry;
	export let idx: number;

	const playSong = () => {
		let embedCode = song.link.split('v=').at(-1);
		currentEmbedCode.set(embedCode ? embedCode : "");
	}
</script>

<div class="mb-4  p-4" >
	<div class="flex">
		<NumberLabel number={idx + 1}></NumberLabel>
		<div class="pt-1">
			<SongTitle {song}></SongTitle>
			{#key song}
				<button class="w-10 h-10 bg-black" on:click={() => {playSong()}}>
					
				</button>
			{/key}
			<div class="markdown-element text-sm">
				<SvelteMarkdown source={song.description} />
			</div>
			<SongImages {song}></SongImages>
		</div>
	</div>
</div>
