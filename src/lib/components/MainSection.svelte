<script>
	import BackgroundImg from '$lib/images/background.jpg';
	import MusicStand from '$lib/images/musicstand.svg';
	import Pencil from '$lib/images/pencil.svg';
</script>

	<div
		style="background-image: url({BackgroundImg})"
		class="flex-grow basis-1/2 h-full -ml-1 pr-8 pt-8 pl-9 pb-[1%] flex justify-center items-end relative"
	>
		<div>
			<img src={MusicStand} class="w-full absolute bottom-0 left-0 right-0"/>
		</div>
		<slot />
		<button>
			<img src={Pencil} class="w-[66%] absolute bottom-[1%] mx-auto left-0 right-0"/>
		</button>
	</div>