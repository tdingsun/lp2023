import { get, writable } from "svelte/store";
import { type SongEntry, type Entry } from "./types";


export const currentEmbedCode = writable<string|undefined>();
export const currentEntry = writable<Entry|undefined>();
export const currentSong = writable<SongEntry|undefined>();
export const currentYTStatus = writable<number>();
export const YTplayer = writable<any>();

export const entries = writable<any>();

export const setCurrentSong = (embedCode: string|undefined) => {
    let entry = get(currentEntry);
    if(entry){
        let currSong = entry.songs.find((song) => song.embedCode === embedCode)
        currentSong.set(currSong)
    }
}