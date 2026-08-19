<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import BackToTop from '@/components/BackToTop.vue'
import { useScrollObserve } from '@/composables/useScrollObserve'
useScrollObserve()
const isFxActive = ref(true)
const toggleFx = () => {
  isFxActive.value = !isFxActive.value}
</script>
<template>
  <div id="app" class="min-h-screen w-full bg-[#0d1117] text-[#c9d1d9] relative selection:bg-emerald-500 selection:text-black">
    <RippleBackground :is-enabled="isFxActive" />
    <Navbar :is-fx-active="isFxActive" @toggle-fx="toggleFx" />
    <main class="w-full pt-16">
      <RouterView />
    </main>
    <BackToTop />
  </div>
</template>