export type Entry = {
    name: string
    slug: string
    introtext?: string
    miscimages: Image[]
    songs: SongEntry[]
}

export type SongEntry = {
    songname: string
    artistname: string
    link: string
    description: string
    images: Image[]
    embedCode?: string
}

export type Image = {
    image: string
}