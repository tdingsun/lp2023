<script lang="ts">
	import type { Entry } from '$lib/types';
	export let entries: Entry[];
    import { page } from '$app/stores';
</script>

<div class="flex flex-col w-[150px] flex-shrink-0 overflow-auto lg:flex-shrink lg:basis-1/4 lg:min-w-[300px] z-[2]">
		{#each entries as entry}
			<div
				class="key-container border-grey4 border border-l-0 -mt-[1px] relative rounded-r-md bg-white"
			>
				<a href="/{entry.slug}">
					<div
						class="h-20 flex justify-end pr-4 items-center hover:bg-grey0 rounded-r-md font-serif tracking-tighter text-xl text-grey6
                        {entry.slug === $page.params.name ? 'bg-grey0' : ''}"
                        >
						{entry.name}
					</div>
				</a>
				<button
					class="black-key h-10 bg-black absolute top-[3.75rem] w-1/2 z-10 rounded-r-md hover:bg-grey5"
				></button>
			</div>
		{/each}
</div>

<style>
	.key-container:nth-child(7n + 4) .black-key,
	.key-container:nth-child(7n) .black-key,
	.key-container:last-child .black-key {
		display: none;
	}
</style>
