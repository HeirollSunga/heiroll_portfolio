// -----------------------------------------------------------------------------
// PROFILE / RESUME CONFIG
// Edit this file to personalize the resume + contact info. No room code changes.
// -----------------------------------------------------------------------------

export interface EducationItem {
  degree: string
  school: string
  period: string
  details?: string[]
}

export interface Profile {
  name: string
  handle: string
  title: string
  summary: string
  location: string
  skills: string[]
  education: EducationItem[]
  certifications: string[]
  // Path to a downloadable resume file placed in /public
  resumeUrl: string
  contact: {
    email: string
    number: string
    Personal_github: string
    School_github: string
    linkedin: string
    website?: string
  }
}

export const profile: Profile = {
  name: 'HEIROLL IANE M. SUNGA',
  handle: 'heirollsunga',
  title: 'Software Engineer & Tech Enthusiast',
  summary:
    'I am a Computer Science graduate, software engineer and data analyst with experience in frontend development, data visualization, and web-based systems. Passionate about building responsive applications, solving technical problems, and turning data into meaningful insights.',
  location: 'General Trias, Cavite',
  skills: [
    'JavaScript',
    'Java (OOP)',
    'PHP',
    'SQL',
    'Python',
    'XML',
    'React',
    'Next.js',
    'Node.js',
    'HTML',
    'CSS',
    'PostgreSQL',
    'Supabase',
    'Vercel',
    'Tableau',
    'Power BI',
    'Looker',
    'Git',
    'GitHub',
    'XAMPP',
    'Cisco Packet Tracer',
    'VS Code',
    'Notion',
    'ChatGPT',
    'Claude',
    'GitHub Copilot',
    'Google Gemini',
  ],
  education: [
    {
      degree: 'B.S. Computer Science',
      school: 'Emilio Aguinaldo College',
      period: 'Jul 2026',
      details: [
        'Capstone Project: Spearheaded the development of an automated Web-Based Room Scheduling System using React, Next.js, Node.js, and PostgreSQL.',
        'Integrated a Constraint Satisfaction Problem (CSP) algorithm for automated conflict detection and WebSockets for real-time availability.',
        'Served as Project Lead, technical writer, UI/UX co-designer, and QA tester.',
        'Data Visualization & Analysis: Created visual charts and data dashboards using Tableau, Power BI, and Looker.',
      ],
    },
  ],
  certifications: [
    'Google Data Analytics Professional Certificate',
  ],
  resumeUrl: '/assets/resume/HEIROLL%20SUNGA%20(CV).pdf',
  contact: {
    email: 'heirollsunga24@gmail.com',
    number: '+63 997 977 5045',
    Personal_github: 'https://github.com/heirollsunga',
    School_github: 'https://github.com/heirollsungaEAC',
    linkedin: 'https://www.linkedin.com/in/heirollsunga',
    website: 'https://heiroll-portfolio.vercel.app',
  },
}
