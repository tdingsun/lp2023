<script>
  import SideConsole from '../../lib/components/SideConsole.svelte';

  import Piano from '../../lib/components/Piano.svelte';

    export let data
</script>

<div class="w-screen h-screen flex">
    <div class="flex flex-col basis-1/4">
        <Piano entries={data.entries}></Piano>
    </div>
    
    <div class="flex-grow basis-1/2 h-full overflow-auto">
        <slot />
    </div>
    <div class="basis-1/4 border-black border">
        <SideConsole></SideConsole>
    </div>
</div>
