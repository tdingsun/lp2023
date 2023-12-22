<script lang="ts">
	import BackgroundImg from '$lib/images/background.png';
	import MusicStand from '$lib/images/musicstand.svg';
	import Pencil from '$lib/images/pencil.svg';
	import StickyNoteContent from './StickyNoteContent.svelte';
	let stickyOpen = false;
	const clickPencil = () => {
		stickyOpen = !stickyOpen
	}
	const closeStickyNote = () => {
		stickyOpen = false;
	}
	let containerWidth: number;
	$: console.log(containerWidth);

</script>

	<div
		bind:clientWidth={containerWidth}
		style="background-image: url({BackgroundImg})"
		class="bg-cover bg-center flex-grow flex-shrink h-0 lg:h-full w-full lg:w-0 lg:-ml-1 px-4 lg:pr-4 pt-8 lg:pl-5 flex justify-center items-end relative z-0 -mt-1  lg:mt-0" 
	>
		<div>
			<img src={MusicStand} alt="music stand background" class="w-full absolute bottom-0 left-0 right-0"/>
		
		</div>
		<div class="pb-[2%] flex-grow">
			<slot />
		</div>
	
		
		{#if stickyOpen}
			<div 
			style="bottom: {Math.max(((containerWidth * 0.48) - 330), 48)}px"
			class="font-pencil text-sm p-4 sticky-shadow left-[calc(50%-160px)] absolute w-[320px] aspect-square bg-yellow-100">
				<button on:click={() => {closeStickyNote()}} class="absolute top-0 right-2 text-xl">x</button>
				<StickyNoteContent></StickyNoteContent>
			</div>
		{/if}
		<button on:click={() => {clickPencil()}}>
			<img src={Pencil} alt="pencil" class="w-[75%] min-w-[450px] max-h-[24px] absolute bottom-[1.2vw] lg:bottom-[0.8vw] mx-auto left-0 right-0 hover:mb-[2px]"/>
		</button>
	</div>

	<style>
		.sticky-shadow {
			box-shadow: 0px 5px 5px 3px rgba(0,0,0,0.1);
		}
	</style>