<script lang="ts">
	import { page } from '$app/stores';
	import PencilNubBackButton from './PencilNubBackButton.svelte';
	import SongPlayer from './SongPlayer.svelte';
	import { currentSong } from '$lib/stores';
	import PageBody from './PageBody.svelte';
	import { currentEntry } from '$lib/stores';
	import type { Entry } from '$lib/types';
	export let data: any;
	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
	$: currentEntry.set(entry);
	$: song = $currentSong;
	if (!entry?.songs.includes($currentSong)) {
		$currentSong = undefined;
	}
	$: playerHeight = 0;
</script>

<div class="z-10 w-full fixed bg-[#f5f4ee] flex flex-col justify-center">
	<h1 class=" text-grey6 text-4xl font-serif text-center z-10 -mb-1">{entry.name}</h1>
	<hr class="border-grey5 mx-4" />
</div>

<div
	bind:clientHeight={playerHeight}
	class="block gradient-border fixed top-[36px] left-0 w-full z-20 {song
		? ''
		: 'h-0 overflow-hidden'}"
>
	<div class="mx-auto p-1">
		<SongPlayer></SongPlayer>
	</div>
	<hr class="border-grey5" />
</div>

<div style="padding-top:{playerHeight + 37}px" class="bg-[#f5f4ee] z-0">
	{#if entry}
		<PageBody></PageBody>
	{/if}
</div>

<PencilNubBackButton></PencilNubBackButton>

<style>
	.gradient-border {
		background-image: linear-gradient(
			theme('colors.grey4') 0%,
			theme('colors.grey3') 6%,
			theme('colors.grey3') 94%,
			theme('colors.grey0') 100%
		);
	}
</style>
