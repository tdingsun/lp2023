<script lang="ts">
	import {
		YTplayer,
		setCurrentSong,
		currentEntry,
		SCplayer,
		currentSongIsSC,
		currentSong,
		isSCPlayerPlaying,
		isYTPlayerPlaying
	} from '$lib/stores';
	import Dog from '$lib/images/dog.svg';
	import { onMount } from 'svelte';

	$: changeVideo($currentSong?.embedCode);
	$: musicStarted = false;

	let ytplayer: any;
	let scplayer: any;
	let showSCplayer = false;
	const changeVideo = async (id: string | undefined) => {
		if(scplayer){
			scplayer.pause();
		}
		if(ytplayer){
			ytplayer.pauseVideo();
		}
		if (id) {

			if ($currentSongIsSC) {


				let src = `${id}
					&auto_play=true
					&buying=false
					&sharing=false
					&download=false
					&show_playcount=false
					&show_artwork=true
					&hide_related=true
					&show_comments=false
					&show_reposts=false
					&show_teaser=false
					&color=7f7d7a
					&show_user=false
					&liking=false
					&visual=true
					`

				if (scplayer) {
					scplayer.load(src, {
						callback: () => {
							showSCplayer = true;
							scplayer.play();
						}
					});
				}
			} else {
				if (ytplayer) {
					ytplayer.loadVideoById(id);
				} else {
					if (window.YT) {
						createYTplayer();
					} else {
						window.onYouTubeIframeAPIReady = createYTplayer;
					}
				}
				musicStarted = true;
			}
		}
	};

	

	function createSCPlayer(url: string) {
		let scContainer = document.getElementById('sciframecontainer');
		let sciframe = document.createElement('iframe');
		sciframe.width = '100%';
		sciframe.height = '100%';
		sciframe.allow = 'autoplay';
		sciframe.src = `https://w.soundcloud.com/player/?url=${url}`;
		if(scContainer){
			scContainer.replaceChildren(sciframe);
		}
		scplayer = SC.Widget(sciframe);
		SCplayer.set(scplayer);


		scplayer.bind(SC.Widget.Events.READY, () => {
			scplayer.play();
			scplayer.pause();

			scplayer.bind(SC.Widget.Events.FINISH, () => {
				$isSCPlayerPlaying = false;
				setNextSong();
			});
			scplayer.bind(SC.Widget.Events.PLAY, () => {
				$isSCPlayerPlaying = true;
			});
			scplayer.bind(SC.Widget.Events.PAUSE, () => {
				$isSCPlayerPlaying = false;

			});
		});
	}

	function createYTplayer() {
		ytplayer = new YT.Player('ytplayer', {
			height: '100%',
			width: '100%',
			videoId: $currentSong?.embedCode,
			playerVars: {
				autoplay: 1,
				color: 'white',
				playsinline: 1
			},
			events: {
				onStateChange: ytPlayerStatechange
			}
		});
		YTplayer.set(ytplayer);
	}
	
	function ytPlayerStatechange({ data }) {
		if (data === 0) {
			setNextSong();
		}
		if (data === 1) {
			$isYTPlayerPlaying = true;
		} else {
			$isYTPlayerPlaying = false;
		}
	}

	function setNextSong() {
		let songList = $currentEntry.songs;
		let currIdx = songList.findIndex((song) => song.embedCode === $currentSong?.embedCode);
		if (currIdx !== -1 && currIdx < songList.length - 1) {
			let nextEmbedCode = songList[currIdx + 1].embedCode;
			setCurrentSong(nextEmbedCode);
		}
	}
	let defaultSCsource = "https://soundcloud.com/goodgruel/twiddlesome&auto_play=false";

	onMount(() => {
		let limit = 4;
		let count = 0;
		let SCScriptLoadInterval = setInterval(() => {
			if(count > limit){
				clearInterval(SCScriptLoadInterval)
			}
			if(window.SC){
				createSCPlayer(defaultSCsource);
				clearInterval(SCScriptLoadInterval)
			} else {
				console.log('no sc');
				count++;
			}
		}, 250);
	});

</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
	<script src="https://w.soundcloud.com/player/api.js"></script>
</svelte:head>

<div class="w-full pb-[56.25%] relative">
	<div
		class="absolute top-0 bottom-0 right-0 left-0
    bg-gradient-to-tr from-black via-grey6 to-grey5 flex"
	>
		<div
			id="sciframecontainer"
			style="display: {$currentSongIsSC && showSCplayer ? 'block' : 'none'}"
			class="relative z-10 w-full h-full "
		>
		</div>


		<div style="display: {$currentSongIsSC ? 'none' : 'block'}" class="z-10 relative w-full h-full">
			<div id="ytplayer" ></div>
		</div>

	</div>

	<img
		src={Dog}
		alt="dog sillhouette"
		class="{musicStarted ? 'hidden' : ''} h-full pt-[20%] absolute -z-1"
	/>
</div>
