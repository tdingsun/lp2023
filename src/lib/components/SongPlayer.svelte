<script lang="ts">
	import { currentEmbedCode, YTplayer, embedCodeList, currentYTStatus } from '$lib/stores';
	import Dog from '$lib/images/dog.svg';
	let w: number;
	$: h = w * 0.5625;
	$: changeVideo($currentEmbedCode);
	$: musicStarted = false;
	let player;

	const changeVideo = (id) => {
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
			if($embedCodeList) {
				let currIdx = $embedCodeList.findIndex((embedCode) => embedCode === $currentEmbedCode)
				if (currIdx !== -1 && currIdx < $embedCodeList.length - 1) {
					currentEmbedCode.set($embedCodeList[currIdx + 1])
				}
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

	<img src={Dog} class="{musicStarted ? 'hidden' : ''} h-full pt-[20%] absolute -z-1" />
</div>
