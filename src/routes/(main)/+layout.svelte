<script context='module'>
	import Device from 'svelte-device-info';
</script>

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
	import MainMobileSection from '$lib/components/MobileMainSection.svelte';
	entries.set(data.entries);
	let screenWidth: number;
	import { page } from '$app/stores';
	import MobileInterface from '$lib/components/MobileInterface.svelte';
	import Pencilnub from '$lib/images/pencilnub.svg';

</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth}
	{#if Device.isPhone}
		{#if $page.params.name}
			<div class="w-full h-full">
				<MainMobileSection {data}></MainMobileSection>
			</div>
		{:else}
			<div
				style="background-image: url({BackgroundImg})"
				class="w-full h-full flex flex-col absolute bg-cover bg-center"
			>
				<MobileInterface></MobileInterface>
				<div class="basis-full flex-grow overflow-scroll">
					<MobilePianoMenu></MobilePianoMenu>
				</div>
			</div>
		{/if}
	{:else}
		<div class="w-screen h-screen flex absolute">
			{#if screenWidth >= 1024}
				<Piano></Piano>
				<MainSection>
					<slot />
				</MainSection>
			{:else if screenWidth >= 768}
				<div class="w-0 h-full flex-shrink flex-grow relative flex flex-col">
					<HorizontalPiano></HorizontalPiano>
					<MainSection>
						<slot />
					</MainSection>
				</div>
			{:else}
				<div class="flex-grow h-full overflow-auto">
					{#if $page.params.name}
						<div class="flex flex-col h-full w-full">
							<div class="h-full w-full">
								<slot/>
							</div>
							<div class="h-20 flex-grow-0 flex-shrink-0 p-2">
								<div class="rounded-[10rem] bg-gradient-to-b from-grey4 via-grey3 via-30% to-grey0 h-full">
									<a href="/" class="cursor-pointer">
										<img src={Pencilnub} class="pb-3 w-[90%] max-w-[20rem] mx-auto h-20 rotate-3 hover:rotate-0"/>
									</a>
								</div>

							</div>
						</div>
					
				{:else}
					<MobilePianoMenu></MobilePianoMenu>
				{/if}
				</div>
				
			{/if}
			<SideConsole></SideConsole>
		</div>
	{/if}
	
{/if}
