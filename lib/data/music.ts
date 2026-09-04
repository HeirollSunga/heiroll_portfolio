// -----------------------------------------------------------------------------
// MUSIC CONFIG
// Add your own tracks here. Use royalty-free / self-owned audio only.
// Place audio in /public/assets/vynil/ or use a configurable remote URL.
// Cover art goes in /public/assets/music/ as pixel-art squares.
//
// NOTE: `audio` may be left as an empty string. The player still works as a
// visual experience (vinyl spins, progress simulates); add real URLs to hear it.
// -----------------------------------------------------------------------------

export interface Track {
  id: string
  title: string
  artist: string
  cover: string
  audio: string
  // duration in seconds (used for the progress bar / display)
  duration: number
}

export const tracks: Track[] = [
  {
    id: 'goodbyes',
    title: 'Goodbyes',
    artist: 'Post Malone feat. Young Thug',
    cover: '/assets/music/cover-1.png',
    audio: '/assets/vynil/Goodbyes%20-%20Post%20Malone%20feat.%20Young%20Thug.mp3',
    duration: 174,
  },
  {
    id: 'sunflower',
    title: 'Sunflower',
    artist: 'Post Malone',
    cover: '/assets/music/cover-2.png',
    audio: '/assets/vynil/Sunflower%20-%20Post%20Malone.mp3',
    duration: 158,
  },
  {
    id: 'white-iverson',
    title: 'White Iverson',
    artist: 'Post Malone',
    cover: '/assets/music/cover-3.png',
    audio: '/assets/vynil/White%20Iverson%20-%20Post%20Malone.mp3',
    duration: 257,
  },
]
