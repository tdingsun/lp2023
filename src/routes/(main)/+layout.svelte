<script>
  import MainSection from '../../lib/components/MainSection.svelte';

	import SideConsole from '../../lib/components/SideConsole.svelte';
	import Piano from '../../lib/components/Piano.svelte';
	export let data;
	import { entries } from '$lib/stores';
	entries.set(data.entries);
</script>

<div class="w-screen h-screen flex absolute">
	<Piano></Piano>
    <MainSection>
        <slot />
    </MainSection>
	<SideConsole></SideConsole>
</div>
