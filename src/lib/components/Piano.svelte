<script lang="ts">
	import { entries } from '$lib/stores';
	import { page } from '$app/stores';
	import * as Tone from 'tone';
	import { onMount } from 'svelte';
	import C1 from '$lib/audio/C1.wav';
	import C2 from '$lib/audio/C2.wav';
	import C3 from '$lib/audio/C3.wav';
	import C4 from '$lib/audio/C4.wav';
	import C5 from '$lib/audio/C5.wav';
	import C6 from '$lib/audio/C6.wav';

	import G1 from '$lib/audio/G1.wav';
	import G2 from '$lib/audio/G2.wav';
	import G3 from '$lib/audio/G3.wav';
	import G4 from '$lib/audio/G4.wav';
	import G5 from '$lib/audio/G5.wav';

	import B1 from '$lib/audio/B1.wav';
	import B2 from '$lib/audio/B2.wav';
	import B3 from '$lib/audio/B3.wav';
	import B4 from '$lib/audio/B4.wav';
	import B5 from '$lib/audio/B5.wav';

	export let horizontal:boolean = false;

	let synth: any;
	let notesInOrder = [
		'B7', 'A7', 'G7', 'F7', 'E7', 'D7', 'C7', 
		'B6', 'A6', 'G6', 'F6', 'E6', 'D6', 'C6', 
		'B5', 'A5', 'G5', 'F5', 'E5', 'D5', 'C5', 
		'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4', 
		'B3', 'A3', 'G3', 'F3', 'E3', 'D3', 'C3', 
		'B2', 'A2', 'G2', 'F2', 'E2', 'D2', 'C2', 
		'B1', 'A1', 'G1', 'F1', 'E1', 'D1', 'C1',
		'B0', 'A0'
	];

	let blackNotesInOrder = [
		'Bb7', 'Ab7', 'Gb7', '', 'Eb7', 'Db7', '',
		'Bb6', 'Ab6', 'Gb6', '', 'Eb6', 'Db6', '',
		'Bb5', 'Ab5', 'Gb5', '', 'Eb5', 'Db5', '',
		'Bb4', 'Ab4', 'Gb4', '', 'Eb4', 'Db4', '',
		'Bb3', 'Ab3', 'Gb3', '', 'Eb3', 'Db3', '',
		'Bb2', 'Ab2', 'Gb2', '', 'Eb2', 'Db2', '',
		'Bb1', 'Ab1', 'Gb1', '', 'Eb1', 'Db1', '',
		'Bb0', 'Ab0'
	];

	let notesInOrderReverse = [
		'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1',
		'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
		'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3',
		'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4',
		'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5',
		'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6',
		'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7',
		'C8', 'D7'

	];

	let blackNotesInOrderReverse = [
		'Db1', 'Eb1', '', 'Gb1', 'Ab1', 'Bb1', '',
		 'Db2', 'Eb2', '', 'Gb2', 'Ab2', 'Bb2','',
		'Db3', 'Eb3', '', 'Gb3', 'Ab3', 'Bb3','', 
		 'Db4', 'Eb4', '', 'Gb4', 'Ab4', 'Bb4','',
		 'Db5', 'Eb5', '', 'Gb5', 'Ab5', 'Bb5','',
		'Db6', 'Eb6', '', 'Gb6', 'Ab6', 'Bb6','', 
	'Db7', 'Eb7', '', 'Gb7', 'Ab7', 'Bb7',	'', 
	 'Db1',	'',

	];

	if(horizontal){
		if($entries) {
			notesInOrder = notesInOrderReverse;
			blackNotesInOrder = blackNotesInOrderReverse;
		}
	}

	const playWhiteKey = (idx: number) => {
		synth.triggerAttackRelease(notesInOrder[idx % notesInOrder.length], '1n');
	};

	const playBlackKey = (idx: number) => {
		synth.triggerAttackRelease(blackNotesInOrder[idx % blackNotesInOrder.length], '1n');
	};

	onMount(() => {
		const vol = new Tone.Volume(-8).toDestination();
		synth = new Tone.Sampler({
			urls: {
				C1, C2, C3, C4, C5, C6, G1, G2, G3, G4, G5, B1, B2, B3, B4, B5
			}
		}).connect(vol);
	});
</script>

{#if $entries}
	{#each $entries as entry, idx}
		<div id="entry-{idx}"
			class="bg-[whitesmoke] key-container border-grey4 border relative {horizontal ? 'w-20 flex-shrink-0 border-t-0 -mr-[1px] rounded-b-md ' : ' border-l-0 -mt-[1px] rounded-r-md'}">
			<a
				href="/{entry.slug}"
				class="group"
				on:click={() => {
					playWhiteKey(idx);
				}}
			>
				<div
					class="w-full h-full absolute group-hover:block group-hover:from-[whitesmoke] group-hover:to-red group-hover:via-lightred group-hover:via-85% group-hover:from-50% black-key-hover:hidden
					{horizontal ? `group-hover:bg-gradient-to-b rounded-b-[5px] ${entry.slug === $page.params.name ? 'bg-gradient-to-b from-[whitesmoke] to-red via-lightred via-85% from-50% block' : 'hidden'}`
					 : `rounded-r-[5px]   group-hover:bg-gradient-to-r ${entry.slug === $page.params.name ? 'bg-gradient-to-r from-[whitesmoke] to-red via-lightred via-90% from-50% block' : 'hidden'}`
					}"
				>
					<div
						class="bg-[rgb(255,247,187)] aspect-square absolute rounded-[10rem]  blur-md
						{horizontal ? 
						'h-11 right-4 bottom-3' : 
						'h-14 right-3 top-3'} 
						"
					></div>
				</div>
				<div
					class="{horizontal ? 
					'h-full w-full justify-start  pb-2 pt-4 rotate-180 vertical-text' : 
					'h-20 justify-end pr-8'} 
					relative flex items-center rounded-r-md text-3xl text-grey6 font-arialrounded piano-name
						"
				>
				
					<p>
						{entry.name}
					</p>
					
				</div>
			</a>
			<div class=" 
			{entry.slug === $page.params.name ? 'text-black' : 'text-grey4'}
			{horizontal ? 'top-1 left-0 w-20 h-8' : 'right-0 top-0 w-8 h-20'} absolute text-xs tracking-wide  flex justify-center items-center rounded-[10rem]">
				{#if horizontal}
				{notesInOrderReverse[idx % notesInOrder.length]}

				{:else}
				{notesInOrder[idx % notesInOrder.length]}
				{/if}
			</div>
			<button
				on:click={() => {
					playBlackKey(idx);
				}}
				class="{horizontal ? 'h-1/2 top-0 -right-4 w-8 rounded-b-md black-key-horizontal' : 'h-10 top-[3.75rem] w-1/2 rounded-r-md'} black-key absolute pointer-events-auto z-10"
			></button>
		</div>
	{/each}
{/if}

<style>
	.vertical-text {
		text-orientation: mixed;
		writing-mode: vertical-rl;
	}

	.black-key {
		border-right: 7px inset;
		border-bottom: 7px inset;
		border-right-color: theme('colors.grey6');
		border-bottom-color: black;
		background-image: linear-gradient(30deg, black 0%, #444 40%, black 50%);
	}
	.black-key:hover {
		background-image: linear-gradient(30deg, black 0%, theme('colors.grey5') 40%, black 50%);
	}

	.black-key:active {
		background-image: linear-gradient(40deg, black 0%, #444 30%, black 50%);
		border-right: 5px inset black;
		border-bottom: 5px inset black;
	}

	.key-container:nth-child(7n + 4) .black-key:not(.black-key-horizontal),
	.key-container:nth-child(7n) .black-key:not(.black-key-horizontal),
	.key-container:last-child .black-key:not(.black-key-horizontal) {
		display: none;
	}

	.key-container:nth-child(7n) .black-key.black-key-horizontal,
	.key-container:nth-child(7n + 3) .black-key.black-key-horizontal,
	.key-container:last-child .black-key.black-key-horizontal {
		display: none;
	}

	.key-container:nth-child(7n + 1) .piano-name p::first-letter {
		color: rgb(253, 51, 51) !important;
	}
	.key-container:nth-child(7n + 2) .piano-name p::first-letter {
		color: rgb(255, 132, 0) !important;
	}
	.key-container:nth-child(7n + 3) .piano-name p::first-letter {
		color: rgb(201, 154, 0) !important;
	}
	.key-container:nth-child(7n + 4) .piano-name p::first-letter {
		color: rgb(23, 154, 23) !important;
	}
	.key-container:nth-child(7n + 5) .piano-name p::first-letter {
		color: rgb(81, 81, 255) !important;
	}
	.key-container:nth-child(7n + 6) .piano-name p::first-letter {
		color: rgb(173, 81, 204) !important;
	}
	.key-container:nth-child(7n) .piano-name p::first-letter {
		color: rgb(255, 71, 181) !important;
	}
</style>
