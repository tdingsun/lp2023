<script lang='ts'>
    import { page } from "$app/stores";
    import type { Entry } from "$lib/types.js";
    import { onMount } from "svelte";
    export let data;
    $: entry = data.entries.find((entry: Entry) => entry.slug === $page.params.name);
    let w: number
    let h: number
    let margins = 32;
    let pageRatio = 8.5/11;
    let inversePageRatio = 11/8.5
    // $: w = 0.77*h;
    const handleResize = () => {
        w = window.innerWidth*0.5 - margins
        h = w*inversePageRatio
        if(h > window.innerHeight - margins) {
            h = window.innerHeight - margins*2
            w = h*pageRatio
        }
        

    }
    onMount(async () => {

        handleResize();

    })

</script>

<svelte:window
on:resize={() => {handleResize()}}
/>

{#if entry}
    <div style="width: {w}px; height: {h}px;"
    class="bg-gray-300 m-auto my-4 p-4 overflow-y-scroll">
        <h1 class="text-2xl">{ entry.name }</h1>
        {#if entry.introtext}
            <div>{entry.introtext}</div>
        {/if}
        {#each entry.songs as song, idx}
            <div class="flex gap-4 flex-wrap">
                <div>{idx + 1}</div>
                <div class="min-w-[20rem]">
                    <div>{song.songname} — {song.artistname}</div>
                    <div>{song.description}</div>
                </div>
                <div class="flex flex-wrap gap-4">
                    {#if song.images && song.images[0].image}
                        {#each song.images as imageObj}
                            <img src={imageObj.image}/>
                        {/each}
                    {/if}
                    
                </div>
            </div>
            

            
        {/each}

    </div>
{/if}
