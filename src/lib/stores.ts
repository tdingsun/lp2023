import { get, writable } from "svelte/store";


export const currentPage = writable<string>();

export const currentEmbedCode = writable<string|undefined>();
export const currentYTStatus = writable<number>();
export const embedCodeList = writable<any>({});
export const YTplayer = writable<any>();

export const addToEmbedCodeList = (name: string, list: (string|undefined)[]) => {
    let currObj = get(embedCodeList);
    embedCodeList.set({...currObj, [name]: list})
}

export const getEmbedCodeList = (name: string) => {
    let currObj = get(embedCodeList);
    return currObj[name]
}