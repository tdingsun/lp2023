<script>
  import SideConsole from '../../lib/components/SideConsole.svelte';
  import BackgroundImg from '$lib/images/background.jpg'

  import Piano from '../../lib/components/Piano.svelte';

    export let data
</script>

<div class="w-screen h-screen flex">
    <div class="flex flex-col basis-1/4 min-w-[300px]">
        <Piano entries={data.entries}></Piano>
    </div>
    
    <div 
    style="background-image: url({BackgroundImg})"
    class="flex-grow basis-1/2 h-full -ml-1 p-4 pb-8">

        <slot />
    </div>
    <div class="basis-1/4 min-w-[300px]">
        <SideConsole></SideConsole>
    </div>
</div>
