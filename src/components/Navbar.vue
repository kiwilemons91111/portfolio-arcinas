<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const props = defineProps<{
  isFxActive?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-fx'): void
}>()

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Dedicated function to smoothly scroll to the top of the page
const scrollToTop = () => {
  closeMobileMenu()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const scrollToSection = (href: string) => {
  closeMobileMenu()
  const targetElement = document.querySelector(href)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      
      <!-- Brand & Branch Indicator -->
      <div class="flex items-center gap-3 font-mono text-xs text-[#8b949e]">
        <a 
          href="#" 
          @click.prevent="scrollToTop" 
          class="flex items-center gap-2 text-[#f0f6fc] font-bold text-sm hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <span class="text-emerald-400">&gt;_</span> rovic.dev
        </a>
        <span class="hidden sm:inline text-[#30363d]">|</span>
        <div class="hidden sm:flex items-center gap-1.5 rounded border border-[#30363d] bg-[#161b22] px-2 py-0.5 text-[11px] text-emerald-400">
          main
        </div>
      </div>

      <!-- Navigation & FX Toggle -->
      <div class="flex items-center gap-4">
        
        <!-- ON / OFF FX Toggle Button -->
        <button
          @click="emit('toggle-fx')"
          type="button"
          class="flex items-center gap-2 rounded border px-2.5 py-1 font-mono text-xs transition-all active:scale-95"
          :class="
            isFxActive
              ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
              : 'border-[#30363d] bg-[#161b22] text-[#8b949e] hover:border-zinc-500 hover:text-[#c9d1d9]'
          "
        >
          <span class="relative flex h-2 w-2">
            <span
              v-if="isFxActive"
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full"
              :class="isFxActive ? 'bg-emerald-500' : 'bg-zinc-600'"
            ></span>
          </span>
          <span>FX: {{ isFxActive ? 'ON' : 'OFF' }}</span>
        </button>

        <!-- Desktop Links -->
        <nav class="hidden md:flex items-center gap-6 font-mono text-xs">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="text-[#8b949e] hover:text-emerald-400 transition-colors py-1 cursor-pointer"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Mobile Drawer Toggle Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded border border-[#30363d] bg-[#161b22] text-[#c9d1d9] hover:bg-[#30363d] md:hidden"
        >
          <svg v-if="!isMobileMenuOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isMobileMenuOpen" class="border-b border-[#30363d] bg-[#0d1117] px-6 py-6 md:hidden font-mono">
      <div class="flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="flex items-center justify-between text-sm text-[#c9d1d9] hover:text-emerald-400 py-2 border-b border-[#30363d]/50 cursor-pointer"
        >
          <span>// {{ link.name }}</span>
          <span class="text-xs text-[#484f58]">&rarr;</span>
        </a>
      </div>
    </div>
  </header>
</template>