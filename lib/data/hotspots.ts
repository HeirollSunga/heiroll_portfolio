// -----------------------------------------------------------------------------
// HOTSPOT MAP
// Coordinates are percentages relative to the square room image (1:1).
// They were tuned to the pixel-art bedroom in /public/assets/room/bedroom.png.
// If you swap the room art, re-tune these boxes.
// -----------------------------------------------------------------------------

export type OverlayKey =
  | 'projects'
  | 'experience'
  | 'resume'
  | 'music'
  | 'about'
  | 'contact'
  | 'settings'

export interface HotspotDef {
  id: string
  // target overlay to open, or an easter-egg action id
  action: OverlayKey | 'egg-chair' | 'egg-cat' | 'egg-pc'
  label: string
  hint: string
  // bounding box in % of the scene
  x: number
  y: number
  w: number
  h: number
  // where the tooltip should appear relative to the box
  tip?: 'top' | 'bottom' | 'left' | 'right'
}

export const hotspots: HotspotDef[] = [
  {
    id: 'monitors',
    action: 'projects',
    label: 'Monitor 1',
    hint: 'Click to view Projects',
    x: 25,
    y: 39,
    w: 12,
    h: 14,
    tip: 'top',
  },
  {
    id: 'monitor-2',
    action: 'experience',
    label: 'Monitor 2',
    hint: 'Click to view Experience',
    x: 37,
    y: 39,
    w: 13,
    h: 14,
    tip: 'top',
  },
  {
    id: 'paper',
    action: 'resume',
    label: 'Paper',
    hint: 'Click to view Resume',
    x: 19.5,
    y: 64.5,
    w: 10.5,
    h: 6.5,
    tip: 'top',
  },
  {
    id: 'turntable',
    action: 'music',
    label: 'Vinyl Player',
    hint: 'Click to change music',
    x: 68,
    y: 66,
    w: 19,
    h: 13,
    tip: 'top',
  },
  {
    id: 'sticky-notes',
    action: 'contact',
    label: 'Sticky Notes',
    hint: 'Click to get in touch',
    x: 27.5,
    y: 50.5,
    w: 7,
    h: 6,
    tip: 'right',
  },
  {
    id: 'chair',
    action: 'egg-chair',
    label: 'Gaming Chair',
    hint: 'Currently occupied',
    x: 38,
    y: 55,
    w: 17,
    h: 27,
    tip: 'left',
  },
  {
    id: 'pc-tower',
    action: 'egg-pc',
    label: 'RGB Rig',
    hint: 'Do not touch the RGB',
    x: 6.5,
    y: 46,
    w: 12,
    h: 20,
    tip: 'right',
  },
  {
    id: 'cat',
    action: 'egg-cat',
    label: '???',
    hint: 'Shhh, he is sleeping',
    x: 65.5,
    y: 49.5,
    w: 9,
    h: 8,
    tip: 'top',
  },
]

// The 5 collectible figures on the shelf (open the About overlay, focused).
export const figureHotspots = [
  { id: 'cap', x: 8, y: 12, w: 5.5, h: 9 },
  { id: 'web', x: 13.5, y: 11.5, w: 5.5, h: 9 },
  { id: 'bat', x: 19, y: 11.5, w: 5.5, h: 9 },
  { id: 'thunder', x: 24.5, y: 11, w: 5.5, h: 9 },
  { id: 'iron', x: 30, y: 11, w: 5.5, h: 9 },
]

// The poster frames on the wall (index maps to posters[] in order).
export const posterHotspots = [
  {
    index: 0,
    x: 8.3,
    y: 27.8,
    w: 8.5,
    h: 14.5,
    clipPath: 'polygon(4% 22%, 96% 0%, 96% 79%, 4% 100%)',
  },
  {
    index: 1,
    x: 19.2,
    y: 24.5,
    w: 8.5,
    h: 14.5,
    clipPath: 'polygon(4% 21%, 96% 0%, 96% 82%, 4% 100%)',
  },
  {
    index: 2,
    x: 29.7,
    y: 21.3,
    w: 8.5,
    h: 14.5,
    clipPath: 'polygon(4% 20%, 96% 0%, 96% 86%, 4% 100%)',
  },
]
