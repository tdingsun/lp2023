<script lang="ts">
	import type { SongEntry } from "$lib/types";

let w;
$: h = w*0.5625;
let showPlayer = false;
const resizeYTPlayer = () => {
    h = w*0.5625;
}

const showYTPlayer = () => {
    showPlayer = true;
}

export let song: SongEntry;
let embedCode = song.link.split('v=').at(-1);
console.log(embedCode);

</script>

<svelte:window
on:resize={() => {resizeYTPlayer()}}/>

<div class="w-full" bind:clientWidth={w} style="height: {h}px">
    {#if showPlayer}
    <iframe 
    class="w-full h-full"
    
    src="https://www.youtube.com/embed/{embedCode}" 
    frameborder="0" 
    allow="">
    </iframe>
        
    {:else}
    <button on:click={() => {showYTPlayer()}} class="absolute w-full h-full">
        <div>cover art</div>
        <div>Play Icon</div>
        
            
    </button>
    
    {/if}
    
    
</div>
    
