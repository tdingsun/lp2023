<script lang="ts">
	import Song from './Song.svelte';
	import { currentEntry } from '$lib/stores';
	import type { Entry } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';
	import DogEar from '$lib/images/dog-ear.svg'
	// let entry: Entry;
	$: entry = $currentEntry;
</script>

<div
	class="h-full w-full max-w-full md:max-w-[calc((100vh-4rem-150px)*0.773)] md:pb-[clamp(0px,129.4%,calc(100vh-4rem-150px))] lg:max-w-[calc((100vh-4rem)*0.773)] md:h-0 lg:pb-[clamp(0px,129.4%,calc(100vh-4rem))] relative mx-auto"
>
<a href='/' class="absolute top-0 right-0 w-8 h-8 hover:w-9 z-10 hidden md:block">
	<img src={DogEar} class=""/>
</a>

	<div class="clipped-corner absolute left-0 right-0 top-0 bottom-0 flex flex-col bg-[#f5f4ee]">
		
	
		{#if entry}
			<h1 class="text-grey6 text-4xl font-serif text-center pt-1 z-10 relative pointer-events-none">{entry.name}</h1>
			
			<hr class="border-grey6 mx-4 -mt-2" />
			
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
</div>

<style>
	@media (min-width: 768px) {
		.clipped-corner {
		-webkit-clip-path: polygon(0% 0%, calc(100% - 32px) 0%, 100% 30px, 100%  100%, 0% 100%);

  		clip-path: polygon(0% 0%, calc(100% - 32px) 0%, 100% 30px, 100%  100%, 0% 100%);
	}
	}
	
</style>