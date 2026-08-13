<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import RippleBackground from '@/components/RippleBackground.vue'
import BackToTop from '@/components/BackToTop.vue'

// Flare Effect state (Defaults to ON)
const isFxActive = ref(true)

const toggleFx = () => {
  isFxActive.value = !isFxActive.value
}
</script>

<template>
  <div class="min-h-screen w-full bg-[#0d1117] text-[#c9d1d9] relative selection:bg-emerald-500 selection:text-black">
    <!-- Centered Canvas Flare Background -->
    <RippleBackground :is-enabled="isFxActive" />

    <!-- Navbar with FX ON/OFF Toggle -->
    <Navbar :is-fx-active="isFxActive" @toggle-fx="toggleFx" />

    <!-- Main Viewport (Fixed scale issue) -->
    <main class="w-full pt-16">
      <RouterView />
    </main>

    <!-- Back To Top Button -->
    <BackToTop />
  </div>
</template>