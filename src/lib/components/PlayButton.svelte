<script lang="ts">
	import {
		YTplayer,
		setCurrentSong,
		SCplayer,
		SCfirstPlay,
		currentSongIsSC,
		currentSong,
		isYTPlayerPlaying,
		isSCPlayerPlaying,
	} from '$lib/stores';
	import { onMount } from 'svelte';
	export let embedCode: string | undefined;


	$: $isYTPlayerPlaying, $isSCPlayerPlaying, checkStatus();

	$: paused = true;

	const checkStatus = () => {
		if (!($currentSong?.embedCode === embedCode)) {
			paused = true;
		} else {
			if($currentSongIsSC){
				paused = !$isSCPlayerPlaying
			} else {
				paused = !$isYTPlayerPlaying

			}
		}
	};

	const playSong = () => {
		if ($SCfirstPlay) {
			//setup SC player
			$SCplayer.setVolume(0);
			$SCplayer.pause();
			$SCplayer.setVolume(100);
			SCfirstPlay.set(false);
		}

		if ($currentSong?.embedCode === embedCode) {
			//song associated with button is currently playing
			console.log('current song embed code = embed code')
			if(paused) {
				if ($currentSongIsSC) {
					$SCplayer.play();
				} else {
					$YTplayer.playVideo();
				}
				paused = false;
			} else {
				if ($currentSongIsSC) {
					$SCplayer.pause();
				} else {
					$YTplayer.pauseVideo();
				}
				paused = true;

			}
		} else {
			//play the new song
			setCurrentSong(embedCode);
			paused = false;
		}
	};
	// onMount(() => {
	// 	if ($currentSong?.embedCode === embedCode) {
	// 		if ($currentSongIsSC) {
	// 			$SCplayer.isPaused((isPaused) => {
	// 				$paused = isPaused;
	// 			});
	// 		} else {
	// 			$paused = $currentYTStatus !== 1;
	// 		}
	// 	}
	// });
</script>

<button
	class="w-8 h-8 flex-shrink-0 -my-[1px] rounded-[8rem] border-inherit border flex justify-center items-center pl-0.5 text-xl
			hover:bg-grey6 hover:text-grey0
		"
	on:click={() => {
		playSong();
	}}
>
	{#if paused}
		▶
	{:else}
		⏸︎
	{/if}
</button>
