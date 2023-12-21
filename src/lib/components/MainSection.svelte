<script>
	import BackgroundImg from '$lib/images/background.png';
	import MusicStand from '$lib/images/musicstand.svg';
	import Pencil from '$lib/images/pencil.svg';
	
	let stickyOpen = false;
	const clickPencil = () => {
		stickyOpen = !stickyOpen
	}

</script>

	<div
		style="background-image: url({BackgroundImg})"
		class="bg-cover bg-center flex-grow flex-shrink h-full w-full lg:w-0 lg:-ml-1 pr-8 pt-8 pl-9 pb-[1%] flex justify-center items-end relative z-0"
	>
		<div>
			<img src={MusicStand} class="w-full absolute bottom-0 left-0 right-0"/>
		
		</div>
		<slot />
	
		
		{#if stickyOpen}
		<div class="font-pencil text-xs p-4 sticky-shadow bottom-[1vw] left-4 absolute w-[250px] aspect-square bg-yellow-100">
			<p class="mb-2">
				LP [long play, listening party, little puppies...] was formed in 2018 as a college radio show >> music club >> and IRL zine project
				today, it exists as an open-ended publishing platform dedicated to celebrating our personal connections to the music of our lives~
				
			</p>
			<p>
				LP-2023 is a collaboration between tiger dingsun, kevin dong, and all who submitted their SOTYs :*

			</p>
		</div>
		{/if}
		<button on:click={() => {clickPencil()}}>
			<img src={Pencil} class="w-[66%] min-w-[450px] absolute bottom-[0.8vw] mx-auto left-0 right-0 hover:pb-[2px]"/>
		</button>
	</div>

	<style>
		.sticky-shadow {
			box-shadow: 2px -2px 5px -1px rgba(0,0,0,0.1);
		}
	</style>