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
	import PauseSVG from '$lib/images/pause.svg';

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
			if($SCplayer){
				console.log('in setup')
				//setup SC player
				$SCplayer.setVolume(0);
				$SCplayer.play();
				$SCplayer.pause();
				$SCplayer.setVolume(100);
				SCfirstPlay.set(false);
			}
		}

		if ($currentSong?.embedCode === embedCode) {
			//song associated with button is currently playing
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
			hover:bg-grey6 hover:text-grey0 group
		"
	on:click={() => {
		playSong();
	}}
>
	{#if paused}
		▶
	{:else}
		<div class="w-[14px] h-[24px] flex justify-between items-center mr-[1px]">
			<div class='w-[5px] h-[14px] bg-black rounded-[1px] group-hover:bg-grey0'>

			</div>
			<div class='w-[5px] h-[14px] bg-black rounded-[1px] group-hover:bg-grey0'>
	
			</div>
		</div>
	
		<!-- <img src={PauseSVG} class="p-[7px] -ml-0.5"/> -->
	{/if}
</button>
