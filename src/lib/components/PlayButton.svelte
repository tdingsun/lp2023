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
	export let embedCode: string | undefined;

	$: $isYTPlayerPlaying, $isSCPlayerPlaying, checkStatus();

	$: paused = true;

	const checkStatus = () => {
		if (!($currentSong?.embedCode === embedCode)) {
			paused = true;
		} else {
			paused = $currentSongIsSC ? !$isSCPlayerPlaying : !$isYTPlayerPlaying
		}
	};

	const playSong = () => {
		//hack to get soundcloud to autoplay
		if ($SCfirstPlay) {
			if($SCplayer){
				$SCplayer.setVolume(0);
				$SCplayer.play();
				$SCplayer.pause();
				SCfirstPlay.set(false);
			}
		}
		if ($currentSong?.embedCode === embedCode) {
			//song associated with button is currently playing
			if(paused) {
				$currentSongIsSC ? $SCplayer.play() : $YTplayer.playVideo()
				paused = false;
			} else {
				$currentSongIsSC ? $SCplayer.pause() : $YTplayer.pauseVideo()
				paused = true;

			}
		} else {
			//play the new song
			setCurrentSong(embedCode);
			paused = false;
		}
	};

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
	
	{/if}
</button>
