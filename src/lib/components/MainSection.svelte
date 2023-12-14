<script>
	import BackgroundImg from '$lib/images/background.jpg';
</script>

	<div
		style="background-image: url({BackgroundImg})"
		class="flex-grow basis-1/2 h-full -ml-1 p-4 pl-5 flex justify-center items-end relative"
	>
		<div
			class="w-full max-w-[calc((100vh-4rem)*0.773)] h-0 pb-[clamp(0px,129.4%,calc(100vh-4rem))] relative mx-auto"
		>
			<div class=" absolute left-0 right-0 top-0 bottom-0 flex flex-col bg-grey0 rounded-sm">
				<slot />
			</div>
		</div>
	</div>

