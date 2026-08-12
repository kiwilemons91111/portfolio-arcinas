import { defineStore } from 'pinia'

export interface ProjectLanguage {
  name: string
  percentage: number
  color: string
}

export interface ProjectScreenshot {
  label: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  role: string
  period: string
  description: string
  tags: string[]
  featured: boolean
  repoBranch: string
  languages: ProjectLanguage[]
  screenshots: ProjectScreenshot[]
}

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    personal: {
      name: 'Rovic Ian L. Arcinas',
      title: 'Software Engineer & Full-Stack Web Developer',
      location: 'Dasmariñas City, Cavite, Philippines',
      email: 'rodelatboat@gmail.com',
      phone: '+63-976-500-4461',
      linkedin: 'https://www.linkedin.com/in/rovic-arcinas-09b2b738a/',
      github: 'https://github.com/kiwilemons91111?tab=overview&from=2026-07-01&to=2026-07-31',
      summary:
        'Detail-oriented Software Engineer specializing in Full-Stack Web Development. Proven track record in architecting automated backend workflows, optimizing database schemas, and building responsive, user-centric web applications.',
    },
    skills: {
      frontend: [
        'Vue 3 (Composition API)',
        'TypeScript',
        'Tailwind CSS v4',
        'HTML5/CSS3',
        'Responsive Design',
      ],
      backend: ['Laravel (PHP)', 'Google Firebase (Auth, DB, Storage)', 'Java', 'C#'],
      architecture: [
        'RESTful APIs',
        'SPA Architecture',
        'Pinia',
        'Vue Router 4 (Navigation Guards)',
      ],
      devops: ['Git', 'Vite', 'RBAC', 'Firebase Security Rules'],
      aiTools: ['Cursor', 'GitHub Copilot', 'ChatGPT', 'Gemini', 'Claude', 'Codex'],
    },
    projects: [
      {
        id: 'provibase',
        title: 'Provibase',
        subtitle: 'Digital Cemetery Management Web App',
        role: 'Software Developer (Contract)',
        period: '2024 - 2026',
        description:
          'Provibase is a web-based Cemetery Management System developed for Providence Memorial Park Dasmariñas. It digitizes burial records, provides an interactive GIS-based grave locator, enables online lot reservations and payment documentation, and facilitates client–agent communication through role-based dashboards. The system was designed to improve record management, transaction efficiency, navigation, and accessibility.',
        tags: ['Vue 3', 'Laravel', 'Firebase', 'Leaflet', 'TypeScript'],
        featured: true,
        repoBranch: 'main',
        languages: [
          { name: 'Vue', percentage: 42, color: '#42b883' },
          { name: 'PHP', percentage: 35, color: '#777bb4' },
          { name: 'TypeScript', percentage: 23, color: '#3178c6' },
        ],
        screenshots: [
          { label: 'Homepage' },
          { label: 'Grave Locator' },
          { label: 'Customer Dashboard' },
          { label: 'Agent Dashboard' },
          { label: 'Staff Dashboard' },
          { label: 'Admin Dashboard' },
        ],
      },
      {
        id: 'shub',
        title: 'DLSU-D S.Hub',
        subtitle: 'Center for Digital Learning Management',
        role: 'Front End Developer',
        period: '2026',
        description:
          'DLSUD Schoolbook Hub (S.Hub) is a web-based platform for managing schoolbook-related concerns at DLSU-D. It allows students and faculty to submit tickets, book appointments and spaces, and request bulletin posts, while staff and trainors manage these requests through dedicated dashboards. The system also provides administrators with tools for managing users, reports, and application settings.',
        tags: ['Vue 3', 'Tailwind CSS', 'Pinia', 'TypeScript'],
        featured: true,
        repoBranch: 'main',
        languages: [
          { name: 'Vue', percentage: 55, color: '#42b883' },
          { name: 'TypeScript', percentage: 30, color: '#3178c6' },
          { name: 'CSS', percentage: 15, color: '#563d7c' },
        ],
        screenshots: [
          { label: 'Homepage' },
          { label: 'Student Dashboard' },
          { label: 'Faculty Dashboard' },
          { label: 'Staff Dashboard' },
          { label: 'Monitoring Dashboard' },
          { label: 'Trainor Dashboard' },
          { label: 'Admin Dashboard' },
        ],
      },
    ] as Project[],
    experience: [
      {
        company: 'DLSU-D S.Hub',
        role: 'Front End Developer',
        period: '2026',
        location: 'Center for Digital Learning Management',
      },
      {
        company: 'Provibase',
        role: 'Software Developer (Contract / Project-Based)',
        period: '2024 - 2026',
        location: 'Digital Cemetery Management System',
      },
    ],
  }),
})
