<script>
  import SideSpeaker from './SideSpeaker.svelte';
  import SongPlayer from './SongPlayer.svelte';
  import SideInterface from './SideInterface.svelte';

</script>

<div class="basis-1/4 min-w-[300px] flex flex-col h-screen overflow-hidden">
    <SideInterface></SideInterface>  
    <SongPlayer></SongPlayer>
    <SideSpeaker></SideSpeaker>
  </div>
