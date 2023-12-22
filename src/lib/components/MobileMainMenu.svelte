<script lang="ts">
	import SpeakerHorizontal from './SpeakerHorizontal.svelte';
	import Piano from './Piano.svelte';
	import Interface from './Interface.svelte';
	let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="w-full h-full flex flex-col absolute bg-cover bg-center">
	<div class="fixed top-0 z-10 w-full flex-shrink flex-grow-0 h-[270px]">
		<Interface isMobile={true}></Interface>
	</div>
	<div class="pt-[270px] z-0">
		<Piano horizontal={false}></Piano>
	</div>
	<div class="flex-shrink-0 w-[100vw] h-[270px] flex flex-col">
		<SpeakerHorizontal></SpeakerHorizontal>
	</div>
</div>

<style>
	.blobs {
		filter: url('#goo');
	}

	.blobs-inner {
		filter: url('#goo-2');
	}

	.radial-gradient-1 {
		background-color: theme('colors.grey0');
		box-shadow: inset 0 0 5px theme('colors.grey6');
	}

	.radial-gradient-2 {
		background-image: radial-gradient(
			theme('colors.grey3') 10%,
			theme('colors.grey0') 50%,
			white 90%
		);
		box-shadow: 0 0 10px theme('colors.grey6');
	}

	.inner-shadow {
		box-shadow: inset 0 0 20px theme('colors.grey6');
	}

	.inner-shadow-sm {
		box-shadow: inset 0 0 5px theme('colors.grey6');
	}
	
	.outer-shadow {
		box-shadow: 0 0 20px theme('colors.grey6');
	}

	.outer-shadow-sm {
		box-shadow: 0 0 5px theme('colors.grey6');
	}
	
</style>
