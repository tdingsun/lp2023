<script context="module">
	import Device from 'svelte-device-info';
</script>

<script lang="ts">
	import MobileMainMenu from '../../lib/components/MobileMainMenu.svelte';
	import PencilNubBackButton from '../../lib/components/PencilNubBackButton.svelte';
	import MainSection from '../../lib/components/MainSection.svelte';
	import SideConsole from '../../lib/components/SideConsole.svelte';
	import Piano from '../../lib/components/Piano.svelte';
	import MobileMainSection from '$lib/components/MobileMainSection.svelte';
	export let data;
	import { entries } from '$lib/stores';
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
		<div class="w-full h-full flex">
			{#if screenWidth >= 1024}
				<div
					class="z-[1] flex-shrink-0 overflow-auto w-[300px] xl:flex-shrink xl:basis-1/4 xl:min-w-[300px]"
				>
					<Piano horizontal={false}></Piano>
				</div>
				<MainSection>
					<slot />
				</MainSection>
			{:else if screenWidth >= 768}
				<div class="w-0 h-full flex-grow relative flex flex-col">
					<div class="flex z-[1] flex-shrink-0 overflow-auto h-[265px] w-full">
						<Piano horizontal={true}></Piano>
					</div>
					<MainSection>
						<slot />
					</MainSection>
				</div>
			{:else}
				<div class="flex-grow h-full overflow-auto">
					{#if $page.params.name}
						<div class="flex flex-col h-full w-full">
							<div class="h-full w-full flex-shrink">
								<slot />
							</div>
							<PencilNubBackButton></PencilNubBackButton>
						</div>
					{:else}
						<div class="flex relative flex-shrink-0 overflow-auto flex-col w-full">
							<Piano horizontal={false}></Piano>
						</div>
					{/if}
				</div>
			{/if}
			<SideConsole></SideConsole>
		</div>
	{/if}
{/if}
