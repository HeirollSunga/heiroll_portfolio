export interface Project {
  id: string
  title: string
  featured?: boolean
  description: string
  technologies: string[]
  liveDemo?: string
  type: string
  features?: string[]
  image?: string
}

export const projects: Project[] = [
  {
    id: 'room-scheduling-system',
    title: 'Automated Room Scheduling System',
    featured: true,
    description:
      'An automated web-based facility management application. It integrates a Constraint Satisfaction Problem (CSP) algorithm for zero-conflict scheduling and utilizes WebSockets for real-time availability tracking.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
    liveDemo: 'https://room-scheduling-system-room-finder.vercel.app/auth/login',
    type: 'Web Application / Facility Management',
    features: [
      'Automated room scheduling',
      'Constraint Satisfaction Problem (CSP) algorithm',
      'Zero-conflict scheduling',
      'Real-time room availability',
      'WebSocket communication',
      'PostgreSQL database',
    ],
  },
  {
    id: 'data-analytics-dashboards',
    title: 'Data Analytics Dashboards',
    description:
      'Data visualizations that process and display complex business metrics.',
    technologies: ['Power BI', 'Tableau', 'Looker', 'Google Sheets'],
    liveDemo: 'https://public.tableau.com/app/profile/heiroll.iane.sunga/vizzes',
    type: 'Data Analytics / Business Intelligence',
  },
  {
    id: 'velvet-film-photobooth',
    title: 'Velvet & Film PhotoBooth',
    description:
      'A boutique photobooth atelier crafting timeless, film-inspired keepsakes for the moments that matter.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Zustand'],
    liveDemo: 'https://velvet-film-photobooth.vercel.app/',
    type: 'Web Application / E-commerce / Creative Platform',
  },
  {
    id: 'file-convert-pro',
    title: 'File Convert Pro',
    description:
      'FileConvert Pro is a fast, private, and modern file conversion tool. Convert documents, images, audio, and video — all directly in your browser with no file size limits and nothing ever uploaded to a server.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveDemo: 'https://file-convert-pro.vercel.app/',
    type: 'Web Utility / File Conversion',
  },
]
