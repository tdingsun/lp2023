export type Entry = {
    name: string
    slug: string
    introtext: string
    songs: SongEntry[]
}

export type SongEntry = {
    songname: string
    artistname: string
    link: string
    description: string
    images: Image[]
}

export type Image = {
    image: string
}