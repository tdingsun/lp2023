<script lang="ts">
	import type { SongEntry } from '$lib/types';
	import { currentEmbedCode, musicIsPlaying } from '$lib/stores';

	let w: number;
	$: h = w * 0.5625;
	$: showPlayer = false;
	$: changeVideo($currentEmbedCode);
	const resizeYTPlayer = () => {
		h = w * 0.5625;
	};

	let player;

	const changeVideo = (id) => {
		console.log(id);
		showPlayer = true;
        
        if(id){
            if (player) {
			player.loadVideoById(id);
		} else {
            console.log('here');
			if (window.YT) {
				load();
			} else {
				window.onYouTubeIframeAPIReady = load;
			}
		}
        }
		
	};

	function load() {
		player = new YT.Player('ytplayer', {
			height: '100%',
			width: '100%',
			videoId: $currentEmbedCode,
			playerVars: { autoplay: 1 },
            events: {
                onStateChange: playerStateChange
            }
		});
	}

    function playerStateChange({data}) {
        if(data == 1){
            musicIsPlaying.set(true)
        } else {
            musicIsPlaying.set(false)
        }
    }
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<svelte:window
	on:resize={() => {
		resizeYTPlayer();
	}}
/>

<div class="w-full" bind:clientWidth={w} style="height: {h}px">
	<div class="{showPlayer ? 'block' : 'hidden'} w-full h-full">
			<div id="ytplayer"></div>
	</div>

	<!-- <iframe 
        class="w-full h-full"
        src="https://www.youtube.com/embed/{embedCode}" 
        frameborder="0" 
        allow="">
    </iframe> -->

	<!-- <button on:click={() => {showYTPlayer()}} class="{showPlayer ? "hidden" : "block"} absolute w-full h-full z-100">
        <div>cover art</div>
        <div>Play Icon</div>
        
            
    </button> -->
</div>
