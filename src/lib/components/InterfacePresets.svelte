<script>
  import PresetButton from './PresetButton.svelte';

  import InterfaceScreen from './InterfaceScreen.svelte';
  export const onEvilButtonClicked = () => {

  }
</script>

<div class="flex items-center text-sm pt-2 pb-1">
      <div class="font-microgramma flex justify-center items-center tracking-widest text-red-900 px-3">L-PRESETS </div>
      <div class="h-[1px] border-b border-red-900 flex-grow"></div>
    </div>
    <div class="flex items-center gap-3">
      <PresetButton on:click={() => {onEvilButtonClicked()}}>EVIL</PresetButton>
      <PresetButton on:click={() => {onEvilButtonClicked()}}>20x20</PresetButton>

    </div>

