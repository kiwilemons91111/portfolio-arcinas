import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    personal: {
      name: 'Rovic Ian L. Arcinas',
      title: 'Software Engineer & Full-Stack Web Developer',
      location: 'Dasmariñas City, Cavite, Philippines',
      email: 'rodelatboat@gmail.com',
      phone: '+63-976-500-4461',
      linkedin: 'https://www.linkedin.com/in/rovic-arcinas-09b2b738a/', // Update with your exact URL
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
          'Developed a modern, web-based management platform featuring an interactive mapping system, digital record keeping, and real-time search functionalities.',
        tags: ['Vue 3', 'Laravel', 'Firebase', 'Leaflet', 'TypeScript'],
        featured: true,
      },
      {
        id: 'shub',
        title: 'DLSU-D S.Hub',
        subtitle: 'Center for Digital Learning Management',
        role: 'Front End Developer',
        period: '2026',
        description:
          'Architected responsive, accessible UI components and integrated state management for campus digital learning tools.',
        tags: ['Vue 3', 'Tailwind CSS', 'Pinia', 'TypeScript'],
        featured: true,
      },
    ],
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
