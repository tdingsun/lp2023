<script lang="ts">
	import { currentEmbedCode, YTplayer, currentYTStatus, setCurrentSong } from '$lib/stores';
	import { onMount } from 'svelte';
	export let embedCode: string|undefined;

	let paused = true;

	$: $currentYTStatus, checkStatus();

    const checkStatus = () => {
        if ($currentEmbedCode === embedCode) {
			if ($currentYTStatus === 1) {
				paused = false;
			} else if ($currentYTStatus === 2) {
				paused = true;
			}
        } else {
            paused = true;
        }
    }
	const playSong = () => {
		if ($currentEmbedCode === embedCode) {
			if ($currentYTStatus === 1) {
				$YTplayer.pauseVideo();
				paused = true;
			} else if ($currentYTStatus === 2) {
				$YTplayer.playVideo();
				paused = false;
			}
		} else {
			currentEmbedCode.set(embedCode);
			setCurrentSong(embedCode);
			paused = false;
		}
	};
	onMount(() => {
		if ($currentEmbedCode === embedCode) {
			paused = $currentYTStatus !== 1;
		}
	});
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
