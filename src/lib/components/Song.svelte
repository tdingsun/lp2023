<script lang="ts">
  import SongImages from './SongImages.svelte';

	import SongTitle from './SongTitle.svelte';
	import SongPlayer from './SongPlayer.svelte';
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
		<NumberLabel number={idx + 1}></NumberLabel>
		<div class="pt-1">
			<SongTitle {song}></SongTitle>
			{#key song}
				<SongPlayer {song}></SongPlayer>
			{/key}
			<div class="markdown-element text-sm">
				<SvelteMarkdown source={song.description} />
			</div>
			<SongImages {song}></SongImages>
		</div>
	</div>
</div>
