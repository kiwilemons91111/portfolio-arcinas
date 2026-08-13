<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
</script>

<template>
  <main class="min-h-screen bg-[#0d1117] text-zinc-100 selection:bg-emerald-500 selection:text-black">
    
    <!-- 1. Hero: WITH Grid Pattern BG -->
    <section class="bg-grid-pattern border-b border-[#30363d]/60">
      <HeroSection />
    </section>

    <!-- 2. Projects: Solid Dark BG (No Grid) -->
    <section class="bg-[#161b22] border-b border-[#30363d]/60">
      <ProjectsSection />
    </section>

    <!-- 3. Skills: WITH Grid Pattern BG -->
    <section class="bg-grid-pattern border-b border-[#30363d]/60">
      <SkillsSection />
    </section>

    <!-- 4. Experience: Solid Dark BG (No Grid) -->
    <section class="bg-[#161b22] border-b border-[#30363d]/60">
      <ExperienceSection />
    </section>

    <!-- 5. Education: WITH Grid Pattern BG -->
    <section class="bg-grid-pattern">
      <EducationSection />
    </section>

  </main>
</template>