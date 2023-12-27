<script lang="ts">
  import PauseSymbol from './PauseSymbol.svelte';

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
	class="w-8 h-8 flex-shrink-0 -my-[1px] rounded-[8rem] border-inherit border flex justify-center items-center pl-0.5 text-xl hover:bg-grey6 hover:text-grey0 group"
	on:click={() => {playSong();}}
>
	{#if paused}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
			<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
		  </svg>
	{:else}
		<PauseSymbol></PauseSymbol>
	{/if}
</button>
