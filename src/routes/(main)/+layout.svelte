<script context="module">
	import Device from 'svelte-device-info';
</script>

<script lang="ts">
  import MobileMainMenu from '../../lib/components/MobileMainMenu.svelte';

	import PencilNubBackButton from '../../lib/components/PencilNubBackButton.svelte';

	import MainSection from '../../lib/components/MainSection.svelte';

	import SideConsole from '../../lib/components/SideConsole.svelte';
	import Piano from '../../lib/components/Piano.svelte';
	export let data;
	import { entries } from '$lib/stores';
	import HorizontalPiano from '$lib/components/HorizontalPiano.svelte';
	import MobilePianoMenu from '$lib/components/MobilePianoMenu.svelte';
	import MobileMainSection from '$lib/components/MobileMainSection.svelte';
	entries.set(data.entries);
	let screenWidth: number;
	import { page } from '$app/stores';
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth}
	{#if Device.isPhone}
		{#if $page.params.name}
			<div class="w-full h-full">
				<MobileMainSection {data}></MobileMainSection>
			</div>
		{:else}
			<MobileMainMenu></MobileMainMenu>
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
								<slot />
							</div>
							<PencilNubBackButton></PencilNubBackButton>
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
