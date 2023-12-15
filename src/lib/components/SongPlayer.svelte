<script lang="ts">
	import { currentEmbedCode, YTplayer, currentYTStatus, setCurrentSong, currentEntry } from '$lib/stores';
	import Dog from '$lib/images/dog.svg';
	let w: number;
	$: h = w * 0.5625;
	$: changeVideo($currentEmbedCode);
	$: musicStarted = false;
	let player: any;

	const changeVideo = (id: string|undefined) => {
		if (id) {
			if (player) {
				player.loadVideoById(id);
			} else {
				if (window.YT) {
					load();
				} else {
					window.onYouTubeIframeAPIReady = load;
				}
			}
            musicStarted = true;
		}
	};

	function load() {
		player = new YT.Player('ytplayer', {
			height: '100%',
			width: '100%',
			videoId: $currentEmbedCode,
			playerVars: { 
                autoplay: 1,
                color: "white",
                playsinline: 1
            },
			events: {
				onStateChange: playerStateChange
			}
		});
        YTplayer.set(player);
	}

	function playerStateChange({ data }) {
		currentYTStatus.set(data);
		if (data == 0) {
			let songList = $currentEntry.songs;
			let currIdx = songList.findIndex((song) => song.embedCode === $currentEmbedCode);
			if(currIdx !== -1 && currIdx < songList.length - 1){
				let nextEmbedCode = songList[currIdx + 1].embedCode;
				currentEmbedCode.set(nextEmbedCode);
				setCurrentSong(nextEmbedCode);
			}
		}
	}
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="w-full pb-[56.25%] relative">
	<div
		class="absolute top-0 bottom-0 right-0 left-0
    bg-gradient-to-tr from-black via-grey6 to-grey5 flex"
	>
		<div id="ytplayer"></div>
	</div>

	<img src={Dog} alt="dog sillhouette" class="{musicStarted ? 'hidden' : ''} h-full pt-[20%] absolute -z-1" />
</div>
