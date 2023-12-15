import { get, writable } from "svelte/store";
import { page } from "$app/stores";
import { type SongEntry, type Entry } from "./types";

export const currentPage = writable<string>();

export const currentEmbedCode = writable<string|undefined>();
export const currentEntry = writable<Entry|undefined>();
export const currentSong = writable<SongEntry|undefined>();

export const currentYTStatus = writable<number>();
export const embedCodeList = writable<any>({});
export const YTplayer = writable<any>();

export const entries = writable<any>();

export const addToEmbedCodeList = (name: string, list: (string|undefined)[]) => {
    let currObj = get(embedCodeList);
    embedCodeList.set({...currObj, [name]: list})
}

export const getEmbedCodeList = (name: string) => {
    let currObj = get(embedCodeList);
    return currObj[name]
}

export const setCurrentSong = (embedCode: string|undefined) => {
    let entry = get(currentEntry);
    if(entry){
        console.log('in setCurrentSong')
        let currSong = entry.songs.find((song) => song.embedCode === embedCode)
        currentSong.set(currSong)
    }
}