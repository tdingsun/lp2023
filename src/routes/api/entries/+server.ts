import { json } from '@sveltejs/kit'
import type { Entry } from '$lib/types'

async function getEntries() {
    let entries: Entry[] = []
    

    const paths = import.meta.glob('/content/*.json', {eager: true})

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.json', '')

        if (file && slug && typeof file === 'object' && 'default' in file ) {
            const entry = file.default as Omit<Entry, 'slug'>
            entries.push({...entry, slug})
        }
       
    }
    entries.sort((first, second) => {
        return first.name < second.name ? -1 : first.name > second.name ? 1 : 0;
    })
    return entries
}

export async function GET() {
    const entries = await getEntries()
    return json(entries)
}