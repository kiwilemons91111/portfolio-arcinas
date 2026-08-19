<script setup lang="ts">
export interface TimelineItem {
  id: string
  hash: string
  role: string
  organization: string
  period: string
  type: 'work' | 'education'
  description: string
  highlights: string[]
  techStack?: string[]
}

const props = defineProps<{
  items?: TimelineItem[]
}>()

const defaultTimelineItems: TimelineItem[] = [
  {
    id: 'exp-1',
    hash: 'c8f91a2',
    role: 'Software Developer',
    organization: 'Provibase (Providence Memorial Park Dasmariñas)',
    period: 'January 2024 — May 2026',
    type: 'work',
    description: 'Spearheaded the development of a web-based Cemetery Management System digitizing burial records, GIS grave location, online lot reservations, and payment processing.',
    highlights: [
      'Engineered interactive GIS-based grave locator mapping system',
      'Implemented role-based access control for Clients, Agents, Staff, and Admins',
      'Streamlined lot reservations, billing logs, and transaction documentation'
    ],
    techStack: ['Vue.js', 'Laravel', 'Firebase', 'Tailwind CSS', 'GIS Mapping', 'REST APIs', 'PHP']
  },
  {
    id: 'exp-2',
    hash: 'e4b2d07',
    role: 'Front End Developer',
    organization: 'DLSU-D Schoolbook Hub (S.Hub)',
    period: 'January 2026 — May 2026',
    type: 'work',
    description: 'Engineered a unified ticketing, booking, and request portal for De La Salle University - Dasmariñas handling student/faculty concerns and administrative tracking.',
    highlights: [
      'Built multi-dashboard workflows for Students, Faculty, Staff, Trainors, and Admins',
      'Integrated real-time space/appointment scheduling and ticket response tracking',
      'Developed bulletin post request and user management modules'
    ],
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'REST APIs', 'Tailwind CSS', 'PHP']
  },
]

const timeline = props.items && props.items.length > 0 ? props.items : defaultTimelineItems
</script>
<template>
  <section id="experience" class="py-16 px-4 max-w-5xl mx-auto">
    <div class="mb-12 text-center md:text-left">
      <h2 class="text-3xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
        <span class="font-mono text-emerald-400 text-xl">git log --graph</span>
        Experience
      </h2>
      <p class="text-zinc-400 text-sm font-mono mt-2">
        // Industrial commit history timeline
      </p>
    </div>
    <div class="relative pl-6 sm:pl-10 border-l-2 border-zinc-800 space-y-12">
      <div
        v-for="(item, index) in timeline"
        :key="item.id"
        class="relative group"
      >
        <div class="absolute -left-[31px] sm:-left-[47px] top-1 flex items-center justify-center">
          <span class="relative flex h-5 w-5 items-center justify-center">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 group-hover:opacity-60 transition-opacity"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-zinc-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors duration-300"></span>
          </span>
        </div>
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-emerald-500/5">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3 mb-4 font-mono text-xs">
            <div class="flex items-center gap-3">
              <span class="text-emerald-400 font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22.95" y2="12"/>
                </svg>
                commit [{{ item.hash }}]
              </span>
              <span class="text-zinc-500">|</span>
              <span class="text-zinc-400">{{ item.period }}</span>
            </div>
            <span
              :class="item.type === 'work' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'"
              class="px-2.5 py-0.5 rounded-full border text-[11px] uppercase tracking-wider font-semibold select-none"
            >
              {{ item.type }}
            </span>
          </div>
          <div class="space-y-1 mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {{ item.role }}
            </h3>
            <p class="text-sm font-mono text-zinc-400">
              @ {{ item.organization }}
            </p>
          </div>
          <p class="text-sm text-zinc-300 mb-4 leading-relaxed">
            {{ item.description }}
          </p>
          <ul class="space-y-1.5 mb-4 text-xs text-zinc-400 font-mono">
            <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex items-start gap-2">
              <span class="text-emerald-400 select-none">+</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
          <div v-if="item.techStack && item.techStack.length > 0" class="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
            <span
              v-for="tech in item.techStack"
              :key="tech"
              class="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
            >
              [{{ tech }}]
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>