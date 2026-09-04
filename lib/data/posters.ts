// -----------------------------------------------------------------------------
// POSTERS CONFIG (Personalization)
// The 3 frames on the wall read from this array, in order.
// To use your own poster: drop an image in /public/assets/posters/ and set
// `image` to its path (JPG / PNG / WebP supported).
// If `image` is empty or the file is missing, the frame shows a graceful
// "add your poster" placeholder instead of breaking the room.
// -----------------------------------------------------------------------------

export interface Poster {
  id: string
  // Leave empty ('') to show an empty customizable frame.
  image: string
  title: string
  caption?: string
}

export const posters: Poster[] = [
  {
    id: 'poster-1',
    image: '/assets/posters/aot.png',
    title: 'Attack on Titan',
    caption: 'A little inspiration from beyond the walls.',
  },
  {
    id: 'poster-2',
    image: '/assets/posters/post%20malone.png',
    title: 'Post Malone',
    caption: 'Late-night soundtrack, permanently on rotation.',
  },
  {
    id: 'poster-3',
    image: '/assets/posters/spiderman.png',
    title: 'Spider-Man',
    caption: 'Friendly neighborhood wall art.',
  },
]
