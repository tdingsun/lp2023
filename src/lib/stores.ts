import { derived, get, writable } from 'svelte/store';
import { type SongEntry, type Entry } from './types';
import { goto } from '$app/navigation';

export const currentEntry = writable<Entry | undefined>();
export const currentSong = writable<SongEntry | undefined>();
export const YTplayer = writable<any>();
export const SCplayer = writable<any>();
export const SCfirstPlay = writable<boolean>(true);

export const isSCPlayerPlaying = writable<boolean>(false);
export const isYTPlayerPlaying = writable<boolean>(false);

export const entries = writable<Entry[] | undefined>();

export const setCurrentSong = (embedCode: string | undefined) => {
	let entry = get(currentEntry);
	if (entry) {
		let currSong = entry.songs.find((song) => song.embedCode === embedCode);
		currentSong.set(currSong);
	}
};

export const isMusicPlaying = derived(
	[isSCPlayerPlaying, isYTPlayerPlaying],
	([$isSCPlayerPlaying, $isYTPlayerPlaying]) => {
		return $isSCPlayerPlaying || $isYTPlayerPlaying;
	}
);

export const currentSongIsSC = derived(
	currentSong,
	($currentSong) => $currentSong?.embedCode?.includes('soundcloud')
);

export const chooseRandomSong = () => {
	let allEntries = get(entries);
	if (allEntries && allEntries.length > 0) {
		let randomIdx = Math.floor(Math.random() * allEntries.length);
		let randomEntry = allEntries[randomIdx];
		let slug = randomEntry.slug;
		let randomSongIdx = Math.floor(Math.random() * randomEntry.songs.length);
		let randomSong = randomEntry.songs[randomSongIdx];
		goto(`/${slug}`).then(() => {
			setCurrentSong(randomSong.embedCode);
			let songElement = document.getElementById(`${slug}-${randomSongIdx}`);
			if (songElement) {
				songElement.scrollIntoView();
				songElement.style.transition = '0.5s';

				songElement.style.boxShadow = '0 0 20px 5px #ffb448';
				songElement.style.backgroundColor = '#ffb448AA';
				setTimeout(() => {
					songElement.style.boxShadow = '';
					songElement.style.backgroundColor = '';
				}, 2000);
			}
			let pianoElement = document.getElementById(`entry-${randomIdx}`);
			if (pianoElement) {
				pianoElement.scrollIntoView();
			}
		});
	}
};
