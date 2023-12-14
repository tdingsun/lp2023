<script>
	import { musicIsPlaying } from '$lib/stores';

	let h;
	$: console.log(h);
</script>

<div
	bind:clientHeight={h}
	class=" basis-[400px] max-h-[400px] min-h-[200px] flex-shrink flex flex-col"
>
	<div class="bg-gradient-to-t from-grey1 to-grey4 basis-2"></div>
	<div
		class="flex-grow flex-shrink flex justify-center bg-gradient-to-t from-grey4 via-grey2 via-30% to-grey4 relative"
	>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="w-0 h-0">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
						result="goo"
					/>
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
		</svg>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="w-0 h-0">
			<defs>
				<filter id="goo-2">
					<feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11"
						result="goo"
					/>
					<feBlend in="SourceGraphic" in2="goo" />
				</filter>
			</defs>
		</svg>

		<div class="w-full max-w-[18rem] h-full relative">
			<div class="w-full h-[38%] relative flex justify-center items-end">
				<div class="blobs w-full h-[90%] absolute flex flex-row justify-center">
					<div
						class="aspect-square rounded-[20rem]
                        bg-gradient-to-t from-grey6 via-grey5 via-85% to-grey0
                        "
					></div>
					<div
						class="aspect-square
                        bg-gradient-to-t from-grey6 via-grey5 via-85% to-grey0
                        rounded-[20rem]"
					></div>
				</div>
				<div class="blobs-inner w-full absolute h-[90%] flex flex-row justify-center py-1 gap-2">
					<div
						class=" aspect-square rounded-[20rem]
                        bg-gradient-to-t from-grey0 via-grey4 to-grey3
                        "
					></div>
					<div
						class="aspect-square
                        bg-gradient-to-t from-grey0 via-grey4 to-grey3
                        rounded-[20rem]"
					></div>
				</div>
				<!-- shadow -->
				<div class="absolute w-full h-full flex justify-center">
					<div class="aspect-square bg-grey4/70 rounded-[20rem] blur-xl"></div>
				</div>
				<!-- inner circles -->
				<div class="w-full absolute h-[90%] flex justify-center ">
					<!-- left circles -->
					<div class=" aspect-square flex justify-center items-center">
						<div
							class="absolute aspect-square h-[70%] rounded-[20rem] bg-gradient-to-t from-grey1 to-white inner-shadow-sm"
						></div>
						<div class="absolute aspect-square h-[50%] rounded-[20rem] radial-gradient-2"></div>
						<div
							class="absolute aspect-square h-[20%] rounded-[20rem] outer-shadow-sm bg-gradient-to-t from-grey2 via-grey0 to-grey0"
						></div>
					</div>
					<!-- right circles -->
					<div class="aspect-square flex justify-center items-center">
						<div class=" absolute aspect-square h-[70%] rounded-[20rem] radial-gradient-1"></div>
						<div class="absolute aspect-square h-[50%] rounded-[20rem] bg-grey6"></div>
					</div>
				</div>
			</div>

			<div class="h-full w-full absolute flex justify-center top-0">
				<div
					class="relative flex mx-auto h-[98%] aspect-[1/1.62] justify-center items-end border-grey5 border-t-0 border-4 rounded-b-[50rem]"
				>
                <div class="bg-gradient-to-t from-grey5 to-grey1 w-1 h-12 absolute top-0 -left-1"></div>
                        <div class="bg-gradient-to-t from-grey5 to-grey1 w-1 h-12 absolute top-0 -right-1"></div>
					<div class="absolute w-full aspect-square flex justify-center items-center">
						<div
							class="absolute h-full aspect-square bg-gradient-to-t from-grey0 via-grey1 to-grey5 rounded-[50rem]"
						></div>
						<div
							class="{$musicIsPlaying ? 'animate-speakerpulse' : ''} absolute aspect-square h-[80%] bg-grey5 rounded-[50rem] inner-shadow"
						></div>
						<div
							class="absolute aspect-square h-[60%] radial-gradient-2 outer-shadow rounded-[50rem]"
						></div>
						<div
							class="absolute aspect-square h-[20%] bg-grey0 rounded-[50rem] outer-shadow-sm"
						></div>
						<div
							class="absolute aspect-square h-[12%] bg-gradient-to-t from-grey3 to-grey0 to-50% outer-shadow-sm rounded-[50rem]"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gradient-to-t from-grey6 via-grey4 to-grey5 basis-2"></div>
</div>

<style>
	.blobs {
		filter: url('#goo');
	}

    .blobs-inner {
		filter: url('#goo-2');
	}


	.radial-gradient-1 {
		background-color: theme('colors.grey0');
		box-shadow: inset 0 0 5px theme('colors.grey6');
	}

	.radial-gradient-2 {
		background-image: radial-gradient(
			theme('colors.grey3') 10%,
			theme('colors.grey0') 50%,
			white 90%
		);
		box-shadow: 0 0 10px theme('colors.grey6');
	}

	.inner-shadow {
		box-shadow: inset 0 0 20px theme('colors.grey6');
	}
	.inner-shadow-sm {
		box-shadow: inset 0 0 5px theme('colors.grey6');
	}

	.outer-shadow {
		box-shadow: 0 0 20px theme('colors.grey6');
	}

	.outer-shadow-sm {
		box-shadow: 0 0 5px theme('colors.grey6');
	}
</style>
