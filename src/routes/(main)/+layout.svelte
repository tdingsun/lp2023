<script>
  import SideConsole from '../../lib/components/SideConsole.svelte';
  import SongPlayer from '$lib/components/SongPlayer.svelte';
  import BackgroundImg from '$lib/images/background.jpg'

  import Piano from '../../lib/components/Piano.svelte';

    export let data
</script>

<div class="w-screen h-screen flex">
    <div class="flex flex-col basis-1/4 min-w-[300px] overflow-auto">
        <div class="flex-shrink overflow-auto">
            <Piano entries={data.entries}></Piano>

        </div>
    </div>
    
    <div 
    style="background-image: url({BackgroundImg})"
    class="flex-grow basis-1/2 h-full -ml-1 p-8 flex justify-center items-end">

        <slot />
    </div>
    <div class="basis-1/4 min-w-[300px]">
        <SideConsole></SideConsole>
    </div>
</div>
