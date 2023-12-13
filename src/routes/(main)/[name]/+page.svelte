<script lang="ts">
	import Song from '../../../lib/components/Song.svelte';
	import { page } from '$app/stores';
	import type { Entry } from '$lib/types.js';
	import { onMount } from 'svelte';
	export let data;

	$: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);

	let w: number;
	let h: number;
	let w2: number;
	let margins = 32;
	let pageRatio = 8.5 / 11;
	let inversePageRatio = 11 / 8.5;
	const handleResize = () => {
		h = w * inversePageRatio;
		if (h > window.innerHeight - margins * 2 ) {
			h = window.innerHeight - margins * 2;
			w2 = h * pageRatio;
		} else {
			w2 = w
		}
	};
	onMount(async () => {
		window.addEventListener('resize', () => {
			debounce(handleResize, 300);
		})
		handleResize();
	});

	const debounce = (func: any, delay: number) => {
		let timer: any;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(context, args), delay);
		};
	};
</script>


{#if entry}
	<div bind:clientWidth={w} class="w-full relative">
		<div class="w-full max-w-[calc((100vh-4rem)*0.773)] h-0 pb-[clamp(0px,129.4%,calc(100vh-4rem))] relative mx-auto">
			<div class=" absolute left-0 right-0 top-0 bottom-0 flex flex-col bg-grey0">
				<h1 class="text-4xl">{entry.name}</h1>
		
				<div class="overflow-auto">
					{#each entry.songs as song, idx}
						<Song {song} {idx}></Song>
					{/each}
				</div>
			</div>
		</div>
		
	</div>
	
{/if}
