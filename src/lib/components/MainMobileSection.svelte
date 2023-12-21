<script lang="ts">
    import { page } from '$app/stores';
	import InterfaceScreen from './InterfaceScreen.svelte';
	import PresetButton from './PresetButton.svelte';
	import SongPlayer from './SongPlayer.svelte';
    import { currentSong } from '$lib/stores';
    import BackgroundImg from '$lib/images/background.png';

	$: song = $currentSong;
	let w: number;
	$: speed = w/30;
</script>

<div  style="background-image: url({BackgroundImg})"
class="bg-cover bg-center w-full h-screen flex flex-col">
    <div class="gradient-border">
        <div class="p-2 gradient-border max-w-[calc(50vh)] mx-auto">
            <SongPlayer></SongPlayer>
        </div>
    </div>   
        <slot />


    <div
	class="gradient-border w-full  px-2 py-[6px] flex-shrink flex-grow basis-0 max-h-[10rem] relative text-sm"
>
	<div class="bg-gradient-to-r from-grey2 via-grey0 to-grey2 rounded-xl w-full h-full py-2 px-2 flex justify-between gap-2">
            <a href="/" class="flex-shrink-0">
                <div class="h-12 bg-gradient-to-t from-grey6 to-grey4 via-grey4 rounded-[20rem] p-[3px]">
                    <div class="w-full h-full rounded-[20rem] bg-gradient-to-t from-grey4 to-grey0 p-[3px]">
                    <button class="w-full h-full tracking-widest bg-grey3 rounded-[20rem] hover:bg-grey2 active:bg-grey4 px-2">← BACK</button>
                    </div>
                </div>
            </a>
        
         
        <div class="gradient-border rounded-2xl p-1 basis-0 w-0 flex-grow flex-shrink flex relative">
			<div class="w-0 px-1 flex-grow bg-orange rounded-xl font-lores text-xl h-full flex flex-col overflow-hidden items-center justify-center">
				{#key song}

				<div class="w-full overflow-hidden relative flex flex-shrink-0 justify-center">
					{#if song}
						<div bind:clientWidth={w} 
						style="animation-duration: {speed}s"
						class="animate-marquee whitespace-nowrap marquee-content">
							<span class="mx-1">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-1">***</span>
						</div>
						<div aria-hidden="true" 
						style="animation-duration: {speed}s"
						class="absolute top-0 animate-marquee2 whitespace-nowrap marquee-content">
							<span class="mx-1">NOW PLAYING: {song.songname} — {song.artistname}</span>
							<span class="mx-1">***</span>
						</div>
					{:else}
					<div class="text-center text-base">Welcome to LP</div>

					{/if}

				</div>

				{/key}
				
			</div>
		</div>
	</div>
</div>
    


</div>





<style>

	.gradient-border {
		background-image: linear-gradient(
			theme('colors.grey4') 0%,
			theme('colors.grey3') 6%,
			theme('colors.grey3') 94%,
			theme('colors.grey0') 100%
		);
	}
</style>