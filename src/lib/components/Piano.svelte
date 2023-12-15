<script lang="ts">
	import type { Entry } from '$lib/types';
	import { entries } from '$lib/stores';
    import { page } from '$app/stores';

</script>

<div class="flex flex-col w-[150px] flex-shrink-0 overflow-auto lg:flex-shrink lg:basis-1/4 lg:min-w-[300px] z-[2]">
		{#each $entries as entry}
			<div
				class="key-container border-grey4 border border-l-0 -mt-[1px] relative rounded-r-md bg-[whitesmoke]"
			>
				<a href="/{entry.slug}" class="group">
						<div class="w-full h-full absolute group-hover:block black-key-hover:hidden
						{entry.slug === $page.params.name ? "block" : "hidden"}">
							<div class="h-10 aspect-square bg-[rgb(255,120,90)] absolute right-5 top-5 rounded-[10rem] blur-md -z-1 
							"></div>
						</div>
					<div
						class="relative h-20 flex justify-end pr-8 items-center rounded-r-md  text-2xl lg:text-3xl text-grey6
						font-arialrounded piano-name
						"
                        >
						<p>
							{entry.name}
						</p>
						
					</div>
					
				</a>
				<button
					class="black-key h-10  absolute top-[3.75rem] w-1/2 z-10 rounded-r-md pointer-events-auto"
				></button>
			</div>
		{/each}
</div>

<style>
	.black-key {
		border-right: 7px inset;
		border-bottom: 7px inset;
		border-right-color: theme('colors.grey6');
		border-bottom-color: black;
		background-image: linear-gradient(
			30deg,
			black 0%,
			#444 40%,
			black 50%
		);
	}
	.black-key:hover {
		background-image: linear-gradient(
			30deg,
			black 0%,
			theme('colors.grey5') 40%,
			black 50%
		);
	}

	.black-key:active {
		background-image: linear-gradient(
			40deg,
			black 0%,
			#444 30%,
			black 50%
		);
		border-right: 5px inset black;
		border-bottom: 5px inset black;
	}

	.key-container:nth-child(7n + 4) .black-key,
	.key-container:nth-child(7n) .black-key,
	.key-container:last-child .black-key {
		display: none;
	}

	.key-container:nth-child(7n+1) .piano-name p::first-letter {
		color: rgb(253, 51, 51)!important;
	}
	.key-container:nth-child(7n+2) .piano-name p::first-letter {
		color: rgb(255, 132, 0)!important;
	}
	.key-container:nth-child(7n+3) .piano-name p::first-letter {
		color: rgb(200, 177, 0)!important;
	}
	.key-container:nth-child(7n+4) .piano-name p::first-letter {
		color: rgb(23, 154, 23)!important;
	}
	.key-container:nth-child(7n+5) .piano-name p::first-letter {
		color: rgb(81, 81, 255)!important;
	}
	.key-container:nth-child(7n+6) .piano-name p::first-letter {
		color: rgb(173, 81, 204)!important;
	}
	.key-container:nth-child(7n) .piano-name p::first-letter {
		color: rgb(255, 71, 181)!important;
	}

</style>
