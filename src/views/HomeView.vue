<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
<template>
  <main class="min-h-screen bg-[#0d1117] text-zinc-100 selection:bg-emerald-500 selection:text-black">
    <section class="reveal-on-scroll bg-grid-pattern border-b border-[#30363d]/60">
      <HeroSection />
    </section>
    <section class="reveal-on-scroll bg-[#161b22] border-b border-[#30363d]/60">
      <ProjectsSection />
    </section>
    <section class="reveal-on-scroll bg-grid-pattern border-b border-[#30363d]/60">
      <SkillsSection />
    </section>
    <section class="reveal-on-scroll bg-[#161b22] border-b border-[#30363d]/60">
      <ExperienceSection />
    </section>
    <section class="reveal-on-scroll bg-grid-pattern border-b border-[#30363d]/60">
      <EducationSection />
    </section>
    <section class="reveal-on-scroll bg-[#161b22]">
      <ContactSection />
    </section>
  </main>
</template>