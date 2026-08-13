<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import provibase1 from '@/assets/projects/provibase-1-homepage.png'
import provibase2 from '@/assets/projects/provibase-2-gravelocator.png'
import provibase3 from '@/assets/projects/provibase-3-customerdashboard.png'
import provibase4 from '@/assets/projects/provibase-4-agentdashboard.png'
import provibase5 from '@/assets/projects/provibase-5-staffdashboard.png'
import provibase6 from '@/assets/projects/provibase-6-admindashboard.png'
import shub1 from '@/assets/projects/shub-1-homepage.png'
import shub2 from '@/assets/projects/shub-2-studentdashboard.png'
import shub3 from '@/assets/projects/shub-3-faultydashboard.png'
import shub4 from '@/assets/projects/shub-4-staffdashboard.png'
import shub5 from '@/assets/projects/shub-5-monitoringdashboard.png'
import shub6 from '@/assets/projects/shub-6-trainordashboard.png'
import shub7 from '@/assets/projects/shub-7-admindashboard.png'
import { usePortfolioStore, type Project } from '@/stores/portfolio'

const portfolio = usePortfolioStore()

const projectImages: Record<string, string[]> = {
  provibase: [provibase1, provibase2, provibase3, provibase4, provibase5, provibase6],
  shub: [shub1, shub2, shub3, shub4, shub5, shub6, shub7],
}

const featuredProjects = computed(() => portfolio.projects.filter((project) => project.featured))

const isModalOpen = ref(false)
const activeProjectId = ref<string | null>(null)
const activeSlideIndex = ref(0)

const activeProject = computed<Project | null>(() => {
  if (!activeProjectId.value) return null
  return portfolio.projects.find((project) => project.id === activeProjectId.value) ?? null
})

const activeImages = computed(() => {
  if (!activeProjectId.value) return []
  return projectImages[activeProjectId.value] ?? []
})

const activeSlideLabel = computed(() => {
  const project = activeProject.value
  if (!project) return ''
  return project.screenshots[activeSlideIndex.value]?.label ?? ''
})

function getPreviewImage(projectId: string) {
  return projectImages[projectId]?.[0] ?? ''
}

function openGallery(projectId: string, slideIndex = 0) {
  activeProjectId.value = projectId
  activeSlideIndex.value = slideIndex
  isModalOpen.value = true
}

function closeGallery() {
  isModalOpen.value = false
  activeProjectId.value = null
  activeSlideIndex.value = 0
}

function nextSlide() {
  const total = activeImages.value.length
  if (total === 0) return
  activeSlideIndex.value = (activeSlideIndex.value + 1) % total
}

function prevSlide() {
  const total = activeImages.value.length
  if (total === 0) return
  activeSlideIndex.value = (activeSlideIndex.value - 1 + total) % total
}

function goToSlide(index: number) {
  activeSlideIndex.value = index
}

function onKeydown(event: KeyboardEvent) {
  if (!isModalOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeGallery()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextSlide()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevSlide()
  }
}

watch(isModalOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="projects" class="relative text-[#c9d1d9]">
    <div class="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div
        class="mb-8 inline-flex items-center gap-2 border border-[#30363d] bg-[#161b22] px-3 py-1.5 font-mono text-xs text-[#8b949e]"
      >
        <span class="text-[#58a6ff]">●</span>
        <span>portfolio.sys</span>
        <span class="text-[#484f58]">/</span>
        <span class="text-[#c9d1d9]">projects.load</span>
      </div>

      <div class="mb-10">
        <h2 class="mb-3 text-2xl font-semibold tracking-tight text-[#f0f6fc] sm:text-3xl">
          Featured Repositories
        </h2>
        <p class="max-w-2xl text-sm leading-relaxed text-[#8b949e] sm:text-base">
          Production systems built with role-based dashboards, interactive mapping, and
          campus-scale request management workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          class="group relative cursor-pointer overflow-hidden border border-[#30363d] bg-[#161b22] transition-all duration-300 hover:border-[#58a6ff]/50 hover:shadow-[0_0_24px_rgba(88,166,255,0.12)]"
          role="button"
          tabindex="0"
          @click="openGallery(project.id)"
          @keydown.enter="openGallery(project.id)"
          @keydown.space.prevent="openGallery(project.id)"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
            style="
              background: radial-gradient(
                600px circle at var(--mouse-x, 50%) var(--mouse-y, 0%),
                rgba(88, 166, 255, 0.06),
                transparent 40%
              );
            "
          />

          <div class="relative border-b border-[#30363d] p-4 sm:p-5">
            <div class="mb-3 flex items-start justify-between gap-3">
              <div class="min-w-0">
                <div class="mb-1 flex items-center gap-2">
                  <svg
                    class="h-4 w-4 shrink-0 text-[#8b949e]"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.973.973 0 0 1-.013.012l-2.25 2.25a.75.75 0 0 1-1.063-1.058l2.25-2.25A.973.973 0 0 1 2 10V2.5Z"
                    />
                  </svg>
                  <h3 class="truncate font-mono text-base font-semibold text-[#58a6ff] sm:text-lg">
                    {{ project.title }}
                  </h3>
                </div>
                <p class="font-mono text-xs text-[#8b949e]">{{ project.subtitle }}</p>
              </div>
              <span
                class="shrink-0 border border-[#30363d] bg-[#0d1117] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#484f58]"
              >
                private
              </span>
            </div>

            <p class="mb-4 line-clamp-3 text-sm leading-relaxed text-[#8b949e]">
              {{ project.description }}
            </p>

            <div class="mb-4 flex flex-wrap gap-2">
              <span
                class="border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400"
              >
                {{ project.role }}
              </span>
              <span
                class="border border-[#30363d] bg-[#0d1117] px-2 py-0.5 font-mono text-[10px] text-[#8b949e]"
              >
                {{ project.period }}
              </span>
            </div>

            <div class="mb-3 flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-[#30363d] bg-[#0d1117] px-2.5 py-0.5 font-mono text-[10px] text-[#58a6ff]"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center gap-4 font-mono text-xs text-[#8b949e]">
              <span class="inline-flex items-center gap-1.5">
                <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M11.75 2.5a.75.75 0 0 1 .75.75V5h1.75A1.75 1.75 0 0 1 16 6.75v5.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-5.5A1.75 1.75 0 0 1 1.75 5H3.5V3.25a.75.75 0 0 1 .75-.75h7.5Z"
                  />
                </svg>
                {{ project.repoBranch }}
              </span>
              <span>{{ project.screenshots.length }} screens</span>
            </div>
          </div>

          <button
            type="button"
            class="relative block w-full overflow-hidden border-0 bg-[#0d1117] p-0 text-left"
            :aria-label="`Open ${project.title} screenshot gallery`"
            @click.stop="openGallery(project.id)"
          >
            <img
              :src="getPreviewImage(project.id)"
              :alt="`${project.title} preview`"
              class="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-[#0d1117]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span
                class="border border-[#30363d] bg-[#161b22] px-4 py-2 font-mono text-xs text-[#c9d1d9]"
              >
                View Gallery →
              </span>
            </div>
          </button>

          <div class="relative border-t border-[#30363d] px-4 py-3 sm:px-5">
            <p class="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#484f58]">
              // language_breakdown
            </p>
            <div class="mb-2 flex h-2 overflow-hidden rounded-full bg-[#0d1117]">
              <span
                v-for="language in project.languages"
                :key="language.name"
                :style="{
                  width: `${language.percentage}%`,
                  backgroundColor: language.color,
                }"
                class="h-full"
                :title="`${language.name} ${language.percentage}%`"
              />
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              <span
                v-for="language in project.languages"
                :key="`${project.id}-${language.name}`"
                class="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#8b949e]"
              >
                <span
                  class="inline-block h-2.5 w-2.5 rounded-full"
                  :style="{ backgroundColor: language.color }"
                />
                {{ language.name }}
                <span class="text-[#484f58]">{{ language.percentage }}%</span>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen && activeProject"
          class="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117]/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="`${activeProject.title} screenshot gallery`"
          @click.self="closeGallery"
        >
          <div
            class="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden border border-[#30363d] bg-[#161b22] shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          >
            <div
              class="flex items-center justify-between gap-3 border-b border-[#30363d] px-4 py-3 sm:px-6"
            >
              <div class="min-w-0">
                <p class="truncate font-mono text-sm text-[#58a6ff]">{{ activeProject.title }}</p>
                <p class="truncate font-mono text-xs text-[#8b949e]">
                  {{ activeSlideLabel }} · {{ activeSlideIndex + 1 }} /
                  {{ activeImages.length }}
                </p>
              </div>
              <button
                type="button"
                class="shrink-0 border border-[#30363d] bg-[#0d1117] px-3 py-2 font-mono text-xs text-[#c9d1d9] transition-colors hover:border-[#8b949e] hover:bg-[#21262d]"
                aria-label="Close gallery"
                @click="closeGallery"
              >
                Esc ✕
              </button>
            </div>

            <div class="relative flex min-h-0 flex-1 items-center justify-center bg-[#0d1117]">
              <button
                type="button"
                class="absolute left-2 top-1/2 z-10 -translate-y-1/2 border border-[#30363d] bg-[#161b22]/90 px-3 py-4 font-mono text-lg text-[#c9d1d9] transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff] sm:left-4 sm:px-4"
                aria-label="Previous screenshot"
                @click="prevSlide"
              >
                ‹
              </button>

              <img
                :src="activeImages[activeSlideIndex]"
                :alt="`${activeProject.title} — ${activeSlideLabel}`"
                class="max-h-[60vh] w-full object-contain sm:max-h-[65vh]"
              />

              <button
                type="button"
                class="absolute right-2 top-1/2 z-10 -translate-y-1/2 border border-[#30363d] bg-[#161b22]/90 px-3 py-4 font-mono text-lg text-[#c9d1d9] transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff] sm:right-4 sm:px-4"
                aria-label="Next screenshot"
                @click="nextSlide"
              >
                ›
              </button>
            </div>

            <div class="border-t border-[#30363d] px-4 py-4 sm:px-6">
              <div class="mb-3 flex flex-wrap justify-center gap-2">
                <button
                  v-for="(screenshot, index) in activeProject.screenshots"
                  :key="`${activeProject.id}-dot-${index}`"
                  type="button"
                  class="h-2.5 w-2.5 rounded-full transition-all sm:h-3 sm:w-3"
                  :class="
                    index === activeSlideIndex
                      ? 'scale-110 bg-[#58a6ff]'
                      : 'bg-[#30363d] hover:bg-[#484f58]'
                  "
                  :aria-label="`Go to ${screenshot.label}`"
                  @click="goToSlide(index)"
                />
              </div>

              <div class="flex flex-wrap justify-center gap-2">
                <button
                  v-for="(screenshot, index) in activeProject.screenshots"
                  :key="`${activeProject.id}-thumb-${index}`"
                  type="button"
                  class="overflow-hidden border transition-all"
                  :class="
                    index === activeSlideIndex
                      ? 'border-[#58a6ff] ring-1 ring-[#58a6ff]/40'
                      : 'border-[#30363d] opacity-70 hover:opacity-100'
                  "
                  :aria-label="`View ${screenshot.label}`"
                  @click="goToSlide(index)"
                >
                  <img
                    :src="activeImages[index]"
                    :alt="screenshot.label"
                    class="h-10 w-16 object-cover object-top sm:h-12 sm:w-20"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>