<script lang="ts">
	import { page } from '$app/stores';
	import InterfaceScreen from './InterfaceScreen.svelte';
	import PresetButton from './PresetButton.svelte';
	import SongPlayer from './SongPlayer.svelte';
	import { currentSong } from '$lib/stores';
	import BackgroundImg from '$lib/images/background.png';
	import Song from './Song.svelte';
	import { currentEntry } from '$lib/stores';
	import type { Entry } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;
	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
	$: currentEntry.set(entry);
	$: song = $currentSong;
	if(!entry?.songs.includes($currentSong)){
		$currentSong = undefined;
	}
	$: playerHeight = 0;
	console.log(playerHeight)
</script>

<div class="z-10 w-full fixed bg-[#f5f4ee] flex flex-col justify-center">
	<h1 class=" text-grey6 text-4xl font-serif text-center z-10 -mb-1">{entry.name}</h1>
	<hr class="border-grey5 {playerHeight > 0 ? "-mt-1" : ""}"/>

</div>

	<div bind:clientHeight={playerHeight} class="block gradient-border fixed top-[36px] left-0 w-full z-20 {song ? '' : 'h-0 overflow-hidden'}">
		<div class="mx-auto p-1">
			<SongPlayer></SongPlayer>
		</div>
		<hr class="border-grey5" />

	</div>


	<div style="padding-top:{playerHeight + 37}px"
	class="bg-[#f5f4ee] z-0">

		{#if entry}

			<div class="overflow-auto px-4">
				{#if entry.introtext}
				<div class="markdown-element py-2 font-serif text-sm w-fit max-w-md tracking-[-0.02rem]">
					<SvelteMarkdown source={entry.introtext}></SvelteMarkdown>
				</div>
				<hr class="border-grey6" />

				{/if}
				{#if entry.songs.length > 0}
					{#each entry.songs as song, idx}
						<Song {song} {idx}></Song>
					{/each}
				{/if}
				{#if entry.miscimages}
					<div class="pb-8 flex flex-wrap flex-shrink flex-grow basis-0 min-w-[120px] gap-2 items-start justify-center">
						{#each entry.miscimages as image}
						<img src={image.image} alt="" class="pb-2">
						{/each}
					</div>
					
				{/if}
			</div>
		{/if}
	</div>

	


	<!-- <div
		class="gradient-border w-full px-2 py-[6px] flex-shrink flex-grow basis-0 max-h-[10rem] relative text-sm"
	>
		<div
			class="bg-gradient-to-r from-grey2 via-grey0 to-grey2 rounded-xl w-full h-full py-2 px-2 flex justify-between gap-2"
		>
			<a href="/" class="flex-shrink-0">
				<div class="h-12 bg-gradient-to-t from-grey6 to-grey4 via-grey4 rounded-[20rem] p-[3px]">
					<div class="w-full h-full rounded-[20rem] bg-gradient-to-t from-grey4 to-grey0 p-[3px]">
						<button
							class="w-full h-full tracking-widest bg-grey3 rounded-[20rem] hover:bg-grey2 active:bg-grey4 px-2"
							>← BACK</button
						>
					</div>
				</div>
			</a>

			<div class="gradient-border rounded-2xl p-1 basis-0 w-0 flex-grow flex-shrink flex relative">
				<div
					class="w-0 px-1 flex-grow bg-orange rounded-xl font-lores text-xl h-full flex flex-col overflow-hidden items-center justify-center"
				>
					{#key song}
						<div class="w-full overflow-hidden relative flex flex-shrink-0 justify-center">
							{#if song}
								<div
									bind:clientWidth={w}
									style="animation-duration: {speed}s"
									class="animate-marquee whitespace-nowrap marquee-content"
								>
									<span class="mx-1">NOW PLAYING: {song.songname} — {song.artistname}</span>
									<span class="mx-1">***</span>
								</div>
								<div
									aria-hidden="true"
									style="animation-duration: {speed}s"
									class="absolute top-0 animate-marquee2 whitespace-nowrap marquee-content"
								>
									<span class="mx-1">NOW PLAYING: {song.songname} — {song.artistname}</span>
									<span class="mx-1">***</span>
								</div>
							{:else}
								<div class="text-center text-base">Welcome to LP</div>
							{/if}
						</div>
					{/key}
				</div>
			</div>
		</div>
	</div> -->

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
