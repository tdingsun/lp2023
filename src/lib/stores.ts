import { get, writable } from "svelte/store";


export const currentPage = writable<string>();

export const musicIsPlaying = writable<boolean>(false);
export const currentEmbedCode = writable<string>();
export const YTplayer = writable<any>();