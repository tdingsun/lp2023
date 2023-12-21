<script lang="ts">
	import { isMusicPlaying } from '$lib/stores';


	import MobilePianoMenu from '$lib/components/MobilePianoMenu.svelte';
	import MobileInterface from '$lib/components/MobileInterface.svelte';
	let screenWidth: number;

</script>

<svelte:window bind:innerWidth={screenWidth} />


<div
	class="w-full h-full flex flex-col absolute bg-cover bg-center"
>
	<div class="fixed top-0 z-10 w-full flex-shrink flex-grow-0 h-[270px]">
		<MobileInterface></MobileInterface>
	</div>
	<div class="pt-[270px]">
		<MobilePianoMenu></MobilePianoMenu>
	</div>
	<div class="flex-shrink-0 w-[100vw] h-[270px] flex flex-col">
		<div class="bg-gradient-to-t from-grey1 to-grey4 basis-2"></div>
		<div class="flex-grow relative flex bg-gradient-to-t from-grey4 via-grey2 via-30% to-grey4">
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

			<div class=" w-[40%] flex justify-center items-center relative">
				<div class="absolute blobs flex flex-col">
					<div class="w-[120px] aspect-square bg-black rounded-[20rem]
					bg-gradient-to-l from-grey6 via-grey5 via-85% to-grey0
					"></div>
					<div class="w-[120px] aspect-square bg-black rounded-[20rem]
					bg-gradient-to-l from-grey6 via-grey5 via-85% to-grey0
					"></div>
				</div>
				<div class="absolute blobs-inner gap-2 flex flex-col">
					<div class="w-[110px] aspect-square bg-black rounded-[20rem]
					bg-gradient-to-l from-grey0 via-grey4 to-grey3
					"></div>
					<div class="w-[110px] aspect-square bg-black rounded-[20rem]
					bg-gradient-to-l from-grey0 via-grey4 to-grey3
					"></div>
				</div>
				<div class="absolute w-[120px] h-[120px] bg-grey4/70 rounded-[20rem] blur-lg"></div>
				<div class="absolute w-full h-full flex flex-col justify-center items-center gap-2">
					<div class="w-[110px] h-[110px] flex justify-center items-center relative ">
						<div
							class="absolute aspect-square h-[70%] rounded-[20rem] bg-gradient-to-t from-grey1 to-white inner-shadow-sm"
						></div>
						<div class="absolute aspect-square h-[50%] rounded-[20rem] radial-gradient-2"></div>
						<div
							class="absolute aspect-square h-[20%] rounded-[20rem] outer-shadow-sm bg-gradient-to-t from-grey2 via-grey0 to-grey0"
						></div>

		
					</div>
					<div class="w-[110px] h-[110px] flex justify-center items-center relative ">
						<div class=" absolute aspect-square h-[70%] rounded-[20rem] radial-gradient-1"></div>
						<div class="absolute aspect-square h-[50%] rounded-[20rem] bg-grey6"></div>

					</div>

				</div>
			

			</div>
			<div class=" w-[60%] flex justify-start items-center ">
				<div class="w-[206px] h-[206px] aspect-square   flex justify-center items-center relative">
					<div
							class="absolute h-full aspect-square bg-gradient-to-t from-grey0 via-grey1 to-grey5 rounded-[50rem]"
						></div>
						<div
							class="{$isMusicPlaying ? 'animate-speakerpulse' :  ''} absolute aspect-square h-[80%] bg-grey5 rounded-[50rem] inner-shadow"
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
			<div class="absolute w-full h-full flex flex-col justify-center">
				<div class="h-[206px] w-[calc(40vw+206px)]  rounded-r-[20rem] border-grey5 border-4 border-l-0 relative"> 
					<div class="h-1 w-12 bg-gradient-to-l from-grey5 to-grey1 -top-1 absolute"></div>
					<div class="h-1 w-12 bg-gradient-to-l from-grey5 to-grey1 -bottom-1 absolute"></div>

				</div>
			</div>
		</div>

		<div class="bg-gradient-to-t from-grey6 via-grey4 to-grey5 basis-2">
		</div>

	</div>
		
		
		
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