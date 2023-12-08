<script lang="ts">
	import type { SongEntry } from '$lib/types.js';
	export let song: SongEntry;

</script>

{#if song.images && song.images[0].image}
				<div class="flex flex-wrap gap-4">
					{#each song.images as imageObj}
						<img src={imageObj.image} />
					{/each}
				</div>
			{/if}

