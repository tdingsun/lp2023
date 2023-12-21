<script lang="ts">
	import MainSection from '../../lib/components/MainSection.svelte';
	import BackgroundImg from '$lib/images/background.png';

	import SideConsole from '../../lib/components/SideConsole.svelte';
	import Piano from '../../lib/components/Piano.svelte';
	export let data;
	import { entries } from '$lib/stores';
	import HorizontalPiano from '$lib/components/HorizontalPiano.svelte';
	import MobilePianoMenu from '$lib/components/MobilePianoMenu.svelte';
	import Interface from '$lib/components/Interface.svelte';
	import MainMobileSection from '$lib/components/MainMobileSection.svelte';
	entries.set(data.entries);
	let screenWidth: number;
	import { page } from '$app/stores';
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth}
	{#if screenWidth >= 768}
		<div class="w-screen h-screen flex absolute">
			{#if screenWidth >= 1024}
				<Piano></Piano>
				<MainSection>
					<slot />
				</MainSection>
			{:else}
				<div class="w-0 h-full flex-shrink flex-grow relative flex flex-col">
					<HorizontalPiano></HorizontalPiano>
					<MainSection>
						<slot />
					</MainSection>
				</div>
			{/if}
			<SideConsole></SideConsole>
		</div>
	{:else if $page.params.name}
		<div class="w-full h-full">
			<MainMobileSection>
				<slot />
			</MainMobileSection>
		</div>
	{:else}
		<div
			style="background-image: url({BackgroundImg})"
			class="w-full h-full flex flex-col absolute bg-cover bg-center"
		>
			<Interface></Interface>
			<div class="basis-full flex-grow overflow-scroll">
				<MobilePianoMenu></MobilePianoMenu>
			</div>
		</div>
	{/if}
{/if}
