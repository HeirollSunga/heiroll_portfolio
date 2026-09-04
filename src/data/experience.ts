export interface ExperienceEntry {
  position: string
  company: string
  date: string
  description: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    position: 'Software Engineer Intern',
    company: 'Microgenesis Business Systems',
    date: 'Jun 2025 — Jul 2025',
    description:
      'Engineered and optimized responsive UIs for the Mgenius LMS using HTML, CSS, JavaScript, and PHP. Resolved over 25 frontend tickets and feature enhancements, including mobile-responsive redesigns for Admin Dashboard, Daily Visits, and Group Reports. Managed local development, version control, and issue tracking using XAMPP, Git, and Notion while deploying critical fixes to staging. Achieved a 4.0/4.0 "Outstanding" rating by delivering high-quality UI solutions and independently resolving frontend/backend integration issues.',
    highlights: [
      'Software Engineering',
      'Frontend Development',
      'Responsive UI',
      'Admin Dashboards',
      'LMS Development',
      'Integration Issue Resolution',
      '25+ frontend tickets resolved',
      '4.0/4.0 Outstanding rating',
      'HTML, CSS, JavaScript, and PHP',
      'XAMPP, Git, and Notion',
      'Deployed critical fixes to staging',
    ],
  },
  {
    position: 'English Test Assessor',
    company: 'GNGN Inc.',
    date: 'Jul 2022 — Sep 2022',
    description:
      'Evaluated 4,817 single-question English proficiency tests for Japanese students, scoring grammar, vocabulary, and comprehension. Maintained accurate and consistent evaluations while following standardized scoring guidelines. Demonstrated strong attention to detail and reliability while processing high volumes of data independently in a remote environment.',
    highlights: [
      'Evaluated 4,817 proficiency tests',
      'Grammar, vocabulary, and comprehension scoring',
      'High-volume data processing',
      'Attention to detail',
      'Quality control',
      'Strict guideline adherence',
      'Remote work',
    ],
  },
]
