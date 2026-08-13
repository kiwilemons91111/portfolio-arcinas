<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <button
    @click="scrollToTop"
    type="button"
    class="fixed bottom-6 right-6 z-40 rounded-lg border border-[#30363d] bg-[#161b22] p-3 text-xs font-mono text-[#c9d1d9] hover:border-emerald-400 hover:text-emerald-400 transition-all shadow-lg active:scale-95 cursor-pointer"
    aria-label="Back to top"
  >
    ▲ TOP
  </button>
</template>