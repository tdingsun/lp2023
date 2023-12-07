import type { LayoutLoad } from './$types';
import type { Entry } from '$lib/types';
export const load: LayoutLoad = async ({ fetch }) => {
    const response = await fetch('api/entries')
    const entries: Entry[] = await response.json()
    return { entries }
}