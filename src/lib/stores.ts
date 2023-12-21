import { derived, get, writable } from "svelte/store";
import { type SongEntry, type Entry } from "./types";


export const currentEmbedCode = writable<string|undefined>();
export const currentEntry = writable<Entry|undefined>();
export const currentSong = writable<SongEntry|undefined>();
export const YTplayer = writable<any>();
export const SCplayer = writable<any>();
export const SCfirstPlay = writable<boolean>(true);

export const isSCPlayerPlaying = writable<boolean>(false);
export const isYTPlayerPlaying = writable<boolean>(false);

export const entries = writable<any>();

export const setCurrentSong = (embedCode: string|undefined) => {
    let entry = get(currentEntry);
    if(entry){
        let currSong = entry.songs.find((song) => song.embedCode === embedCode)
        currentSong.set(currSong)
    }
}

export const isMusicPlaying = derived([isSCPlayerPlaying, isYTPlayerPlaying], ([$isSCPlayerPlaying, $isYTPlayerPlaying]) => {
    return ($isSCPlayerPlaying || $isYTPlayerPlaying)
})

export const currentSongIsSC = derived(currentSong, ($currentSong) => $currentSong?.embedCode?.includes('soundcloud'));