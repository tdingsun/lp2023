<script>
  import InterfacePresets from './InterfacePresets.svelte';
  import InterfaceScreen from './InterfaceScreen.svelte';

  export let isMobile = false;
</script>

<div class="flex flex-col flex-grow basis-0">
  <div class="bg-gradient-to-t from-grey1 to-grey4 basis-2"></div>
  <div class="flex-grow bg-gradient-to-t from-grey4 via-grey2 via-30% to-grey4 p-3 pt-2 flex flex-col">
    <div class="font-microgramma text-2xl tracking-wider px-3 pb-2 text-grey6 break-keep">LP–2023</div>
    <InterfaceScreen></InterfaceScreen>
    <InterfacePresets {isMobile}></InterfacePresets>
  </div>
  <div class="bg-gradient-to-t from-grey6  via-grey4 to-grey5 basis-2"></div>
</div>


