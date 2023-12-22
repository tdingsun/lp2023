<script lang="ts">
	import type { SongEntry } from '$lib/types.js';
	import { onMount } from 'svelte';
	export let song: SongEntry;
	$: SCArtUrl = '';

	const setSCArt = () => {
		if (song?.embedCode?.includes('soundcloud')) {
			if (song?.scArtUrl) {
				SCArtUrl = song.scArtUrl;
			} else {
				let iframe = document.createElement('iframe');
				iframe.src = `https://w.soundcloud.com/player/?url=${song.embedCode}`;
				document.getElementById('iframe-container')?.append(iframe);
				if(window.SC){
					let player = SC.Widget(iframe);
					player.bind(SC.Widget.Events.READY, () => {
						player.getCurrentSound((sound) => {
							SCArtUrl = sound.artwork_url;
							song.scArtUrl = SCArtUrl;
						});
					});
				}
			}
		}
	}

	onMount(() => {
		let SCScriptLoadInterval = setInterval(() => {
			if(window.SC){
				setSCArt();
				clearInterval(SCScriptLoadInterval)
			} else {
				console.log('no sc');
			}
		}, 250);
		
		
	});
</script>

{#if song?.embedCode?.includes('soundcloud')}
	<div id="iframe-container" class="invisible hidden w-0 h-0"></div>
	{#if SCArtUrl}
		<div
			style="background-image: url({SCArtUrl});
		background-position: center center;
		background-size: 180%;
		"
			class="h-[calc(2rem-2px)] w-[calc(2rem-2px)] absolute left-0"
		></div>
	{/if}
{:else}
	<div
		style="background-image: url(http://i.ytimg.com/vi/{song.embedCode}/default.jpg);
		background-position: center center;
		background-size: 180%;
		"
		class="h-[calc(2rem-2px)] w-[calc(2rem-2px)] absolute left-0"
	></div>
{/if}
