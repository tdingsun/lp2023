<script>
    export let data
</script>

<div class="w-screen h-screen flex">
    <div class="flex flex-col basis-1/4">
        Piano
        {#each data.entries as entry}
        <a href="/{entry.slug}">
            <div class="border-black border border-t-0 first:border-t p-8 hover:bg-gray-300">{entry.name}</div>
        </a>
        {/each}
    </div>
    
    <div class="flex-grow basis-1/2 h-full overflow-auto">
        <slot />
    </div>
    <div class="basis-1/4 border-black border">
        sidebar
        <div>interface</div>
        <div>speaker</div>
    </div>
</div>
