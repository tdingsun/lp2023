<script>
	import PresetButton from './PresetButton.svelte';
	import { chooseRandomSong } from '$lib/stores';
</script>

<div class="flex items-center text-sm pt-2 pb-1">
	<div class="font-microgramma flex justify-center items-center tracking-widest text-darkred px-3">
		L-PRESETS
	</div>
	<div class="h-[1px] border-b border-darkred flex-grow"></div>
</div>
<div class="flex justify-normal items-end gap-4 px-1">
	
	<a href="https://open.spotify.com/playlist/4stX2DW5rYLxcKsyXRyfdq?si=8905397c377741db" target="_blank">
		<PresetButton>EVIL</PresetButton
		>
	</a>
	
	<a href="https://tdingsun.github.io/lp20x20/index" target="_blank">
		<PresetButton>20x20</PresetButton
		>
	</a>
	
  <div class="h-12 p-1 rounded-xl gradient-border flex-grow max-w-[9rem]">
    <button on:click={() => {chooseRandomSong()}} class="w-full h-full bg-gradient-to-r from-red via-lightred to-red hover:from-lightred hover:via-red hover:to-lightred red-shadow rounded-xl font-microgramma tracking-wider text-grey6">
      MEGAMIX
    </button>
  </div>
</div>

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

