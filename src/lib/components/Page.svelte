<script lang="ts">
	import PageBody from './PageBody.svelte';

	import { currentEntry } from '$lib/stores';
	$: entry = $currentEntry;
	let inCorner = false;
	const onMouseOverCorner = () => {
		inCorner = true;
	};
	const onMouseLeaveCorner = () => {
		inCorner = false;
	};
</script>

<div
	class="h-full w-full max-w-full md:bottom-0 md:max-w-[calc((100vh-32px-265px)*0.773)] md:pb-[clamp(0px,129.4%,calc(100vh-32px-265px))] lg:max-w-[calc((100vh-2rem)*0.773)] md:h-0 lg:pb-[clamp(0px,129.4%,calc(100vh-2rem))] relative mx-auto"
>
	<div
		class="{inCorner
			? 'clipped-corner-big'
			: 'clipped-corner'} absolute left-0 right-0 top-0 bottom-0 flex flex-col bg-[#f5f4ee]"
	>
		<a
			href="/"
			on:mouseover={() => {
				onMouseOverCorner();
			}}
			on:mouseleave={() => {
				onMouseLeaveCorner();
			}}
			on:focus={() => {
				onMouseOverCorner();
			}}
			on:blur={() => {
				onMouseLeaveCorner();
			}}
		
			class="group absolute top-0 right-0 w-12 h-12 hover:w-14 hover:h-14 z-10 hidden md:block"
		>
			<div
				class="w-0 h-0 border-b-[3rem] group-hover:border-b-[3.5rem] group-hover:border-r-[3.5rem] border-b-[#f5f4ee] border-r-[3rem] border-r-[transparent] shadow-[-3px_3px_10px_0px_#9b9888]"
			></div>
		</a>

		{#if entry}
			<h1 class="text-grey6 text-4xl font-serif text-center pt-1 z-10 relative pointer-events-none">
				{entry.name}
			</h1>

			<hr class="border-grey6 mx-4 -mt-2" />

			<PageBody></PageBody>
		{/if}
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.clipped-corner {
			-webkit-clip-path: polygon(0% 0%, calc(100% - 48px) 0%, 100% 48px, 100% 100%, 0% 100%);
			clip-path: polygon(0% 0%, calc(100% - 48px) 0%, 100% 48px, 100% 100%, 0% 100%);
		}

		.clipped-corner-big {
			-webkit-clip-path: polygon(0% 0%, calc(100% - 56px) 0%, 100% 56px, 100% 100%, 0% 100%);
			clip-path: polygon(0% 0%, calc(100% - 56px) 0%, 100% 56px, 100% 100%, 0% 100%);
		}
	}
</style>
