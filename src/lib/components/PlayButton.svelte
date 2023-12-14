<script lang="ts">
	import type { SongEntry } from '$lib/types.js';
	import { currentEmbedCode, YTplayer, musicIsPlaying } from '$lib/stores'
	import { onMount } from 'svelte';
	export let song: SongEntry;
	export let idx: number;

    let paused = true;
    let embedCode = song.link.split('v=').at(-1);

	const playSong = () => {

        if ($currentEmbedCode === embedCode) {

            let playerState = $YTplayer.getPlayerState()
            if (playerState === 1) {
                $YTplayer.pauseVideo();
                paused = true;
            } else if (playerState === 2) {
                $YTplayer.playVideo();
                paused = false;

            }
        } else {
            currentEmbedCode.set(embedCode ? embedCode : "");
            paused = false;
        }

	}
    onMount(() => {
        if($currentEmbedCode === embedCode) {
            let playerState = $YTplayer.getPlayerState()
            if (playerState === 1) {
                paused = false;
            } else {
                paused = true;
            }
        }
    })
</script>

			<button class="w-8 h-8 flex-shrink-0 -my-[1px] rounded-[8rem] border-inherit border flex justify-center items-center pl-0.5 text-xl
			hover:bg-grey6 hover:text-grey0
		" on:click={() => {playSong()}}>
			{#if paused}
                ▶
            {:else}
                ⏸︎
            {/if}
		</button>

