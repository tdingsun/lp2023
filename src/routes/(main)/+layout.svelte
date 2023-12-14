<script>
  import MainSection from '../../lib/components/MainSection.svelte';

	import SideConsole from '../../lib/components/SideConsole.svelte';
	import Piano from '../../lib/components/Piano.svelte';
	export let data;
</script>

<div class="w-screen h-screen flex">
	<Piano entries={data.entries}></Piano>
    <MainSection {data}>
        <slot />
    </MainSection>
	<SideConsole></SideConsole>
</div>
