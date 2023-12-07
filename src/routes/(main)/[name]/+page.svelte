<script lang="ts">
	import Song from '../../../lib/components/Song.svelte';
	import { page } from '$app/stores';
	import type { Entry } from '$lib/types.js';
	import { onMount } from 'svelte';
	export let data;
	let headerHeight: number;
	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
	$: headerHeight;
	let w: number;
	let h: number;
	let margins = 32;
	let pageRatio = 8.5 / 11;
	let inversePageRatio = 11 / 8.5;

	const handleResize = () => {
		w = window.innerWidth * 0.5 - margins;
		h = w * inversePageRatio;
		if (h > window.innerHeight - margins * 2 - headerHeight) {
			h = window.innerHeight - margins * 2 - headerHeight;
			w = h * pageRatio;
		}
	};
	onMount(async () => {
		handleResize();
	});
</script>

<svelte:window
	on:resize={() => {
		handleResize();
	}}
/>

{#if entry}
	<div class="flex flex-col h-full pt-4">
		<div style="width: {w}px;" class="mx-auto" bind:clientHeight={headerHeight}>
			<h1 class="text-4xl">{entry.name}</h1>
		</div>
		<div class="overflow-auto border-t border-black">
			{#each entry.songs as song, idx}
				<Song {song} {idx} {w} {h}></Song>
			{/each}
		</div>
	</div>
{/if}
