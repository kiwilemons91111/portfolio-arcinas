<script setup lang="ts">
import { ref } from 'vue'
const email = 'rodelatboat@gmail.com'
const phone = '+63 976 500 4461' 
const copiedTarget = ref<string | null>(null)
const copyToClipboard = (text: string, label: string) => {
  navigator.clipboard.writeText(text)
  copiedTarget.value = label
  setTimeout(() => {
    copiedTarget.value = null
  }, 2500)
}
</script>
<template>
  <section id="contact" class="scroll-mt-20 bg-[#161b22] relative text-[#c9d1d9] py-16 sm:py-24 px-4 sm:px-6">
    <div class="mx-auto max-w-6xl">
      <div
        class="mb-8 inline-flex items-center gap-2 border border-[#30363d] bg-[#161b22] px-3 py-1.5 font-mono text-xs text-[#8b949e]">
        <span class="text-[#58a6ff]">●</span>
        <span>portfolio.sys</span>
        <span class="text-[#484f58]">/</span>
        <span class="text-[#c9d1d9]">contact.init</span>
      </div>
      <div class="mb-10">
        <h2 class="mb-3 text-2xl font-semibold tracking-tight text-[#f0f6fc] sm:text-3xl">
          Get in Touch
        </h2>
        <p class="max-w-2xl text-sm leading-relaxed text-[#8b949e] sm:text-base">
          Execute a direct communications channel to collaborate on projects, discuss opportunities, or drop a query.
        </p>
      </div>
      <div class="mx-auto max-w-3xl w-full">
        <div class="rounded-t-xl border border-[#30363d] bg-[#161b22] px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="font-mono text-xs text-[#8b949e]">bash --contact-terminal</span>
        </div>
        <div class="rounded-b-xl border-x border-b border-[#30363d] bg-[#0d1117] p-6 sm:p-8 font-mono text-xs sm:text-sm text-[#c9d1d9] space-y-6">
          <div>
            <p class="text-emerald-400">$ ./initiate_contact.sh</p>
            <p class="text-[#8b949e] mt-1 break-words">
              // Executing direct comms channel with Rovic Ian L. Arcinas...
            </p>
          </div>
          <div class="space-y-2 border-t border-[#30363d]/60 pt-4">
            <p class="text-[#8b949e]">$ echo $EMAIL</p>
            <div class="flex flex-wrap items-center justify-between gap-3 bg-[#161b22] p-3 rounded border border-[#30363d]">
              <span class="text-white break-all select-all font-semibold">{{ email }}</span>
              <button
                @click="copyToClipboard(email, 'email')"
                type="button"
                class="min-h-[44px] px-4 py-2 rounded bg-[#21262d] border border-[#30363d] text-xs text-emerald-400 hover:border-emerald-400 hover:bg-[#30363d] transition-colors active:scale-95 flex items-center gap-1.5"
              >
                <span v-if="copiedTarget === 'email'" class="text-emerald-400">✓ copied!</span>
                <span v-else>[copy email]</span>
              </button>
            </div>
          </div>
          <div class="space-y-2 border-t border-[#30363d]/60 pt-4">
            <p class="text-[#8b949e]">$ echo $PHONE</p>
            <div class="flex flex-wrap items-center justify-between gap-3 bg-[#161b22] p-3 rounded border border-[#30363d]">
              <span class="text-white break-all select-all font-semibold">{{ phone }}</span>
              <button
                @click="copyToClipboard(phone, 'phone')"
                type="button"
                class="min-h-[44px] px-4 py-2 rounded bg-[#21262d] border border-[#30363d] text-xs text-emerald-400 hover:border-emerald-400 hover:bg-[#30363d] transition-colors active:scale-95 flex items-center gap-1.5"
              >
                <span v-if="copiedTarget === 'phone'" class="text-emerald-400">✓ copied!</span>
                <span v-else>[copy phone]</span>
              </button>
            </div>
          </div>
          <div class="border-t border-[#30363d]/60 pt-4 text-[11px] text-[#484f58] flex justify-between items-center">
            <span>status: 200 OK</span>
            <span class="animate-pulse text-emerald-400">_ cursor active</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>