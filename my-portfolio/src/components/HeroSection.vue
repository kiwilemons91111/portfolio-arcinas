<script setup lang="ts">
import { computed } from 'vue'

import profileImage from '@/assets/profile.jpg'
import { usePortfolioStore } from '@/stores/portfolio'

const portfolio = usePortfolioStore()

const systemBadges = computed(() => [
  ...portfolio.skills.frontend.slice(0, 3),
  ...portfolio.skills.backend.slice(0, 2),
  ...portfolio.skills.architecture.slice(0, 2),
])
</script>

<template>
  <section class="relative overflow-hidden bg-[#0d1117] text-[#c9d1d9]">
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.35]"
      aria-hidden="true"
      style="
        background-image:
          linear-gradient(#30363d 1px, transparent 1px),
          linear-gradient(90deg, #30363d 1px, transparent 1px);
        background-size: 48px 48px;
      "
    />

    <div class="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div
        class="mb-6 inline-flex items-center gap-2 border border-[#30363d] bg-[#161b22] px-3 py-1.5 font-mono text-xs text-[#8b949e]"
      >
        <span class="text-emerald-400">●</span>
        <span>portfolio.sys</span>
        <span class="text-[#484f58]">/</span>
        <span class="text-[#c9d1d9]">hero.init</span>
      </div>

      <!-- Grid columns flipped on desktop: left column (0.85fr) for Profile Image, right column (1.15fr) for Bio Info -->
      <div class="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        
        <!-- 1. PROFILE PICTURE BLOCK (Renders FIRST/TOP on Mobile, LEFT on Desktop) -->
        <div class="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            class="absolute -top-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-emerald-500/40 bg-[#0d1117] px-4 py-1.5 font-mono text-[11px] text-emerald-400 status-pulse"
          >
            <span class="mr-2 inline-flex items-center gap-1.5">
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Online
            </span>
            <span class="text-[#484f58]">/</span>
            Ready for Contract
          </div>

          <div class="relative border border-[#30363d] bg-[#161b22]/80 p-5 pt-8 backdrop-blur-sm">
            <span
              class="pointer-events-none absolute -left-px -top-px z-10 font-mono text-sm leading-none text-[#58a6ff]"
              aria-hidden="true"
            >
              +
            </span>
            <span
              class="pointer-events-none absolute -right-px -top-px z-10 font-mono text-sm leading-none text-[#58a6ff]"
              aria-hidden="true"
            >
              +
            </span>
            <span
              class="pointer-events-none absolute -bottom-px -left-px z-10 font-mono text-sm leading-none text-[#58a6ff]"
              aria-hidden="true"
            >
              +
            </span>
            <span
              class="pointer-events-none absolute -bottom-px -right-px z-10 font-mono text-sm leading-none text-[#58a6ff]"
              aria-hidden="true"
            >
              +
            </span>

            <div class="relative overflow-hidden border border-[#30363d] bg-[#0d1117]">
              <img
                :src="profileImage"
                :alt="`${portfolio.personal.name} profile photo`"
                class="aspect-square w-full object-cover object-[center_25%] grayscale-[15%] contrast-[1.05]"
              />

              <div
                class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(13,17,23,0.85)_100%)]"
                aria-hidden="true"
              />
            </div>

            <div class="mt-4 border-t border-[#30363d] pt-4">
              <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
                <span class="text-[#484f58]">frame::profile</span>
                <span class="text-emerald-400">● active</span>
              </div>
              <div class="mt-2 flex items-center justify-between font-mono text-xs">
                <span class="text-[#8b949e]">dev_id</span>
                <span class="text-[#c9d1d9]">RIV-001</span>
              </div>
              <div class="mt-1 flex items-center justify-between font-mono text-xs">
                <span class="text-[#8b949e]">mode</span>
                <span class="text-emerald-400">contract_ready</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. INFORMATION / BIO CARD (Renders SECOND/BELOW on Mobile, RIGHT on Desktop) -->
        <div class="border border-[#30363d] bg-[#161b22]/80 p-6 backdrop-blur-sm sm:p-8">
          <div class="mb-5 flex flex-wrap gap-2">
            <span
              class="border border-[#30363d] bg-[#0d1117] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400"
            >
              SYS::ENGINEER
            </span>
            <span
              class="border border-[#30363d] bg-[#0d1117] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#58a6ff]"
            >
              FULL-STACK
            </span>
            <span
              class="border border-[#30363d] bg-[#0d1117] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#d2a8ff]"
            >
              VUE::TS
            </span>
          </div>

          <h1 class="mb-3 text-3xl font-semibold tracking-tight text-[#f0f6fc] sm:text-4xl lg:text-5xl">
            {{ portfolio.personal.name }}
          </h1>

          <p class="mb-5 font-mono text-sm text-emerald-400 sm:text-base">
            &gt; {{ portfolio.personal.title }}
          </p>

          <p class="mb-8 max-w-xl text-base leading-relaxed text-[#8b949e]">
            {{ portfolio.personal.summary }}
          </p>

          <div class="mb-8">
            <p class="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#484f58]">
              // loaded_modules
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="badge in systemBadges"
                :key="badge"
                class="border border-[#30363d] bg-[#0d1117] px-2.5 py-1 font-mono text-[11px] text-[#8b949e] transition-colors hover:border-[#484f58] hover:text-[#c9d1d9]"
              >
                {{ badge }}
              </span>
            </div>
          </div>

          <div class="mb-6 flex flex-wrap gap-3">
            <a
              :href="portfolio.personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-[#30363d] bg-[#21262d] px-4 py-2 font-mono text-xs text-[#c9d1d9] transition-colors hover:border-[#8b949e] hover:bg-[#30363d]"
            >
              <span class="text-[#8b949e]">$</span>
              github
            </a>
            <a
              :href="portfolio.personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-[#30363d] bg-[#21262d] px-4 py-2 font-mono text-xs text-[#c9d1d9] transition-colors hover:border-[#8b949e] hover:bg-[#30363d]"
            >
              <span class="text-[#8b949e]">$</span>
              linkedin
            </a>
            <a
              :href="`mailto:${portfolio.personal.email}`"
              class="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-mono text-xs text-emerald-400 transition-colors hover:border-emerald-400 hover:bg-emerald-500/20"
            >
              <span class="text-emerald-500">$</span>
              contact
            </a>
          </div>

          <p class="font-mono text-xs text-[#484f58]">
            <span class="text-[#8b949e]">loc:</span>
            {{ portfolio.personal.location }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>