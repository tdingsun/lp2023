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


	let synth;
	let notesInOrder = [
		'C6', 'B5', 'A5', 'G5', 'F5', 'E5', 'D5',
		'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4',
		'C4', 'B3', 'A3', 'G3', 'F3', 'E3', 'D3',
		'C3', 'B2', 'A2', 'G2', 'F2', 'E2', 'D2',
		'C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1',
		'C1'
	];

	let blackNotesInOrder = [
		'',
		'Bb5',
		'Ab5',
		'Gb5',
		'',
		'Eb5',
		'Db5',

		'',
		'Bb4',
		'Ab4',
		'Gb4',
		'',
		'Eb4',
		'Db4',

		'',
		'Bb3',
		'Ab3',
		'Gb3',
		'',
		'Eb3',
		'Db3',
		'',
		'Bb2',
		'Ab2',
		'Gb2',
		'',
		'Eb2',
		'Db2',
		
		'',
		'Bb1',
		'Ab1',
		'Gb1',
		'',
		'Eb1',
		'Db1',

		''
	];

	const playWhiteKey = (idx) => {
		synth.triggerAttackRelease(notesInOrder[idx % notesInOrder.length], '2n');
	};

	const playBlackKey = (idx) => {
		synth.triggerAttackRelease(blackNotesInOrder[idx % blackNotesInOrder.length], '2n');
	};

	onMount(() => {
		const vol = new Tone.Volume(-8).toDestination();
		synth = new Tone.Sampler({
			urls: {
				C1, C2, C3, C4, C5, C6, G1, G2, G3, G4, G5
			}
		}).connect(vol);
	});
</script>

<div
	class="flex flex-col w-[150px] flex-shrink-0 overflow-auto xl:flex-shrink xl:basis-1/4 xl:min-w-[300px] z-[3] relative overflow-x-visible"
>
	{#each $entries as entry, idx}
		<div
			class="key-container border-grey4 border border-l-0 -mt-[1px] relative rounded-r-md 
				bg-[whitesmoke]
				"
		>
			<a
				href="/{entry.slug}"
				class="group"
				on:click={() => {
					playWhiteKey(idx);
				}}
			>
				<div
					class="rounded-r-[5px] w-full h-full absolute group-hover:block group-hover:bg-gradient-to-r group-hover:from-[whitesmoke] group-hover:to-red group-hover:via-lightred group-hover:via-85% group-hover:from-50% black-key-hover:hidden
						{entry.slug === $page.params.name ? 'bg-gradient-to-r from-[whitesmoke] to-red via-lightred via-85% from-50% block' : 'hidden'}"
				>
					<div
						class="h-14 aspect-square bg-[rgb(255,247,187)] absolute right-3 top-3 rounded-[10rem] blur-md
							"
					></div>
				</div>
				<div
					class=" relative h-20 flex justify-end pr-4 xl:pr-8 items-center rounded-r-md text-2xl xl:text-3xl text-grey6
						font-arialrounded piano-name
						"
				>
					<p>
						{entry.name}
					</p>
				</div>
			</a>
			<button
				on:click={() => {
					playBlackKey(idx);
				}}
				class="black-key h-10 absolute top-[3.75rem] w-1/2 z-10 rounded-r-md pointer-events-auto"
			></button>
		</div>
	{/each}
</div>

<style>
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

	.key-container:nth-child(7n + 5) .black-key,
	.key-container:nth-child(7n + 1) .black-key,
	.key-container:last-child .black-key {
		display: none;
	}

	.key-container:nth-child(7n + 1) .piano-name p::first-letter {
		color: rgb(253, 51, 51) !important;
	}
	.key-container:nth-child(7n + 2) .piano-name p::first-letter {
		color: rgb(255, 132, 0) !important;
	}
	.key-container:nth-child(7n + 3) .piano-name p::first-letter {
		color: rgb(222, 177, 0) !important;
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
