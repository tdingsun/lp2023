import { get, writable } from "svelte/store";


export const currentPage = writable<string>();

export const currentEmbedCode = writable<string|undefined>();
export const currentYTStatus = writable<number>();
export const embedCodeList = writable<(string|undefined)[]>()
export const YTplayer = writable<any>();