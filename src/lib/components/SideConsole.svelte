<script>
  import SideSpeaker from './Speaker.svelte';
  import SongPlayer from './SongPlayer.svelte';
  import SideInterface from './Interface.svelte';
</script>

<div class="basis-1/4 w-1/4 min-w-[300px] flex flex-col h-screen overflow-hidden">
    <SideInterface></SideInterface>  
    <SongPlayer></SongPlayer>
    <SideSpeaker></SideSpeaker>
</div>
