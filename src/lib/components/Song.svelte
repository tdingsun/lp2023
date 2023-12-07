<script lang="ts">
  import NumberLabel from './NumberLabel.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import type { SongEntry } from '$lib/types.js';
	export let w: number;
	export let h: number;
	export let song: SongEntry;
	export let idx: number;
</script>

<div
	style="width: {w}px; min-height: {h}px;"
	class="bg-gray-300 m-auto my-4 p-4 pl-0 overflow-y-scroll"
>
	<div class="flex">
		<NumberLabel number={idx+1}></NumberLabel>
		<div class="pt-1">
			<div class="mb-4">{song.songname} — {song.artistname}</div>
			<div class="markdown-element text-sm">
				<SvelteMarkdown source={song.description} />
			</div>
			{#if song.images && song.images[0].image}
				<div class="flex flex-wrap gap-4">
					{#each song.images as imageObj}
						<img src={imageObj.image} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
