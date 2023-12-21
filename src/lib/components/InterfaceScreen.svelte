<script lang="ts">
	import { currentSong } from '$lib/stores';
	$: song = $currentSong;
	let w: number;
	$: speed = w/30;
</script>

<div
	class="gradient-border w-full rounded-2xl px-3 py-[6px] flex-shrink flex-grow basis-0 min-h-[6rem] max-h-[10rem]"
>
	<div class="bg-gradient-to-r from-grey2 via-grey0 to-grey2 rounded-xl w-full h-full py-4 px-8">
		<div class="gradient-border w-full h-full rounded-2xl p-1">
			<div class="bg-orange rounded-xl font-lores text-xl h-full flex flex-col overflow-y-hidden items-center justify-center">
				{#key song}

				<div class="overflow-x-hidden relative flex gap-2 flex-shrink-0">
					{#if song}
						<div bind:clientWidth={w} 
						style="animation-duration: {speed}s"
						class="animate-marquee whitespace-nowrap marquee-content">
							<span class="mx-2">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-2">***</span>
						</div>
						<div aria-hidden="true" 
						style="animation-duration: {speed}s"
						class="absolute top-0 animate-marquee2 whitespace-nowrap marquee-content">
							<span class="mx-2">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-2">***</span>
						</div>
					{:else}
					<div class="text-center text-base">{'<< Welcome to LP >>'}</div>

					{/if}

				</div>

				{/key}
				
			</div>
		</div>
	</div>
</div>

<style>

	.gradient-border {
		background-image: linear-gradient(
			theme('colors.grey5') 0%,
			theme('colors.grey3') 6%,
			theme('colors.grey3') 94%,
			theme('colors.grey0') 100%
		);
	}
</style>
