<script setup lang="ts">
export interface EducationItem {
  id: string
  hash: string
  degree: string
  institution: string
  period: string
  location: string
  description: string
  highlights: string[]
  courses?: string[]
}

const props = defineProps<{
  educationList?: EducationItem[]
}>()

const defaultEducation: EducationItem[] = [
  {
    id: 'edu-1',
    hash: 'a1003f9',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'De La Salle University - Dasmariñas',
    location: 'Dasmariñas, Cavite',
    period: '2022 — 2026',
    description: 'Specialized in Software Engineering, Web Application Development, Database Management Systems, and Enterprise Architecture.',
    highlights: [
      'Successfully developed and defended Provibase (GIS Cemetery Management System) as Capstone Project',
      'Focused on Full-Stack Development, REST API Design, and Database Optimization',
      'Active involvement in web development projects and campus technical solutions'
    ],
    courses: [
      'Web Application Development',
      'Database Systems & Management',
      'Software Engineering',
      'Systems Analysis & Design',
      'Data Structures & Algorithms'
    ]
  }
]

const items = props.educationList && props.educationList.length > 0 ? props.educationList : defaultEducation
</script>

<template>
  <section id="education" class="py-12 px-4 max-w-5xl mx-auto">
    <div class="mb-10 text-center md:text-left">
      <h2 class="text-3xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
        <span class="font-mono text-cyan-400 text-xl">git log --education</span>
        Education
      </h2>
      <p class="text-zinc-400 text-sm font-mono mt-2">
        // Academic credentials & continuous learning
      </p>
    </div>
    <div class="relative pl-6 sm:pl-10 border-l-2 border-zinc-800 space-y-10">
      <div v-for="item in items" :key="item.id" class="relative group">
        <div class="absolute -left-[31px] sm:-left-[47px] top-1 flex items-center justify-center">
          <span class="relative flex h-5 w-5 items-center justify-center">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20 group-hover:opacity-60 transition-opacity"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-zinc-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300"></span>
          </span>
        </div>
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-cyan-500/5">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3 mb-4 font-mono text-xs">
            <div class="flex items-center gap-3">
              <span class="text-cyan-400 font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                commit [{{ item.hash }}]
              </span>
              <span class="text-zinc-500">|</span>
              <span class="text-zinc-400">{{ item.period }}</span>
            </div>

            <span class="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-semibold select-none">
              DEGREE
            </span>
          </div>
          <div class="space-y-1 mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {{ item.degree }}
            </h3>
            <div class="flex flex-wrap items-center gap-2 text-sm font-mono text-zinc-400">
              <span class="text-emerald-400">@ {{ item.institution }}</span>
              <span class="text-zinc-600">•</span>
              <span class="text-zinc-500">{{ item.location }}</span>
            </div>
          </div>
          <p class="text-sm text-zinc-300 mb-4 leading-relaxed">
            {{ item.description }}
          </p>
          <ul class="space-y-1.5 mb-4 text-xs text-zinc-400 font-mono">
            <li v-for="(highlight, idx) in item.highlights" :key="idx" class="flex items-start gap-2">
              <span class="text-cyan-400 select-none">+</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
          <div v-if="item.courses && item.courses.length > 0" class="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
            <span class="text-xs font-mono text-zinc-500 w-full mb-1">// Relevant Coursework:</span>
            <span
              v-for="course in item.courses"
              :key="course"
              class="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
            >
              [{{ course }}]
            </span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>