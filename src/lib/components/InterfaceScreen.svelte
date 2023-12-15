<script>
	import { currentSong } from '$lib/stores';
	$: song = $currentSong;
</script>

<div
	class="gradient-border w-full rounded-2xl px-3 py-[6px] flex-shrink basis-0 h-[6rem]"
>
	<div class="bg-gradient-to-r from-grey2 via-grey0 to-grey2 rounded-xl w-full h-full py-4 px-8">
		<div class="gradient-border w-full h-full rounded-2xl p-1">
			<div class="bg-orange rounded-xl font-lores text-xl h-full flex items-center justify-center">
				{#key song}
				<div class="overflow-x-hidden relative flex gap-2">
					{#if song}
						<div class="animate-marquee whitespace-nowrap">
							<span class="mx-2">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-2">***</span>
						</div>
						<div aria-hidden="true" class="absolute top-0 animate-marquee2 whitespace-nowrap">
							<span class="mx-2">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-2">***</span>
						</div>
					{:else}
						<div class="m-2 ">Welcome to LP ÷)</div>
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
