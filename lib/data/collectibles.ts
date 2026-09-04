// -----------------------------------------------------------------------------
// COLLECTIBLES / ABOUT CONFIG
// The 5 figures on the wall shelf. Each is a clickable "collectible card"
// that doubles as an About Me / Things I Like section.
// -----------------------------------------------------------------------------

export interface Collectible {
  id: string
  name: string
  // A theme color for the card accent (any CSS color).
  color: string
  category: string
  description: string
  quote: string
  connection: string
}

export const collectibles: Collectible[] = [
  {
    id: 'cap',
    name: 'The Captain',
    color: '#4f7ddb',
    category: 'Marvel',
    description:
      'The one who never gives up, even against impossible odds. Loyalty over everything.',
    quote: '"I can do this all day."',
    connection:
      'Reminds me to keep shipping even when the bug count feels endless.',
  },
  {
    id: 'web',
    name: 'The Web-Slinger',
    color: '#e0435a',
    category: 'Gaming',
    description:
      'Friendly neighborhood problem solver. Quick, scrappy, and always improvising.',
    quote: '"With great power comes great responsibility."',
    connection:
      'My favorite games are the ones that make you feel this agile and free.',
  },
  {
    id: 'bat',
    name: 'The Detective',
    color: '#5b5b6e',
    category: 'Movies',
    description:
      'Prepares for everything. The gadgets, the plan, the backup plan.',
    quote: '"It is not who I am underneath, but what I do that defines me."',
    connection: 'Late-night noir films are my coding soundtrack of choice.',
  },
  {
    id: 'thunder',
    name: 'The Thunderer',
    color: '#f0b429',
    category: 'Music',
    description:
      'Big energy, bigger entrances. Powered by a great playlist at max volume.',
    quote: '"Is this a good place to build something loud?"',
    connection: 'Nightcore + a mechanical keyboard = my kind of thunder.',
  },
  {
    id: 'iron',
    name: 'The Engineer',
    color: '#c0392b',
    category: 'Technology',
    description:
      'Tinkerer, builder, and unapologetic gadget nerd. If it can be automated, it will be.',
    quote: '"Sometimes you gotta run before you can walk."',
    connection: 'The reason I fell in love with building things in the first place.',
  },
]
