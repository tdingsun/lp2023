<script>
  import InterfacePresets from './InterfacePresets.svelte';

  import InterfaceScreen from './InterfaceScreen.svelte';

</script>

<div class="flex flex-col basis-1/2 flex-grow">
  <div class="bg-gradient-to-t from-grey1 to-grey4 basis-2"></div>
  <div class="flex-grow bg-gradient-to-t from-grey4 via-grey2 via-30% to-grey4 p-3 pt-2">
    <div class="font-microgramma text-2xl tracking-wider px-3 pb-2 text-grey6">LP–2023</div>
    <InterfaceScreen></InterfaceScreen>
    <InterfacePresets></InterfacePresets>
  </div>
  <div class="bg-gradient-to-t from-grey6  via-grey4 to-grey5 basis-2"></div>
</div>


