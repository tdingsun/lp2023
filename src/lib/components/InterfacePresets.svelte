<script>
	import PresetButton from './PresetButton.svelte';

	import InterfaceScreen from './InterfaceScreen.svelte';
	let showSticky = false;
	const onEvilButtonClicked = () => {};
	const onAboutButtonClicked = () => {showSticky = !showSticky};
</script>

<div class="flex items-center text-sm pt-2 pb-1">
	<div class="font-microgramma flex justify-center items-center tracking-widest text-darkred px-3">
		L-PRESETS
	</div>
	<div class="h-[1px] border-b border-darkred flex-grow"></div>
</div>
<div class="flex justify-normal items-end gap-4 px-1">
	<PresetButton
		on:click={() => {
			onEvilButtonClicked();
		}}>EVIL</PresetButton
	>
	<PresetButton
		on:click={() => {
			onEvilButtonClicked();
		}}>20x20</PresetButton
	>
  <div class="h-12 p-1 rounded-xl gradient-border flex-grow max-w-[9rem]">
    <button class="w-full h-full bg-gradient-to-r from-red via-lightred to-red hover:from-lightred hover:via-red hover:to-lightred red-shadow rounded-xl font-microgramma tracking-wider text-grey6">
      MEGAMIX
    </button>
  </div>
  <div class="md:hidden">
	<PresetButton
	on:click={() => {
		onAboutButtonClicked();
	}}>ABOUT</PresetButton
>
  </div>
</div>
{#if showSticky}
<div class="font-pencil leading-[1.5] font-bold text-xs p-4 sticky-shadow top-[260px] left-0 absolute w-[300px] aspect-square bg-yellow-100 z-10">
	<p class="mb-2">
		LP [Long Play, Listening Party, Little Puppies…] was formed in 2018 as a college radio show, music club, and IRL zine project. today, it exists as an open-ended publishing platform dedicated to celebrating our personal connections to the music of our lives.
	</p>
	<p>
		this third edition, LP-2023, is a collaboration between tiger dingsun, kevin dong, and all the Lovely People who submitted their SOTYs… thank you all!”
	</p>
</div>
{/if}


<style>
	.gradient-border {
		background-image: linear-gradient(
			theme('colors.grey5') 0%,
			theme('colors.grey4') 20%,
			theme('colors.grey4') 80%,
			theme('colors.grey1') 100%
		);
	}

  .red-shadow {
    box-shadow: 0 0 10px 4px theme('colors.red');
  }
  .sticky-shadow {
		box-shadow: 2px -2px 5px -1px rgba(0,0,0,0.1);
	}
</style>

