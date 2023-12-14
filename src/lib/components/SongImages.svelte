<script lang="ts">
	import type { SongEntry } from '$lib/types.js';
	export let song: SongEntry;
</script>

{#if song.images && song.images[0] && song.images[0].image}
	<div class="flex flex-wrap flex-shrink flex-grow basis-0 min-w-[120px] gap-2 items-start justify-center">
		{#each song.images as imageObj}
			<img src={imageObj.image} alt=''/>
		{/each}
	</div>
{/if}
