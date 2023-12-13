<script lang="ts">
	import type { Entry } from '$lib/types';
	export let entries: Entry[];
</script>

{#each entries as entry}
	<div class="key-container border-black   border border-l-0 -mt-[1px] relative rounded-r-md bg-white">
		<a href="/{entry.slug}" >
            <div class="h-20 flex justify-start items-center pl-[calc(12.5vw+16px)] hover:bg-gray-300 rounded-r-md">
                {entry.name}
            </div>
        </a>
        <div class="black-key h-10 bg-black absolute top-[3.75rem] w-[12.5vw] z-10  rounded-r-md"></div>
	</div>
{/each}

<style>
    .key-container:nth-child(7n+4) .black-key,
    .key-container:nth-child(7n) .black-key,
    .key-container:last-child .black-key{
        display: none;
    }
</style>



