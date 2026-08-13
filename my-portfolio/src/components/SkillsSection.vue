<script setup lang="ts">
export interface SkillCategory {
  title: string
  fileIdentifier: string
  skills: string[]
}

const props = defineProps<{
  skillGroups?: SkillCategory[]
}>()

const defaultSkillGroups: SkillCategory[] = [
  {
    title: 'Frontend',
    fileIdentifier: 'frontend.config.ts',
    skills: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Nuxt.js', 'React', 'HTML5/CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend & Cloud',
    fileIdentifier: 'backend-cloud.env',
    skills: ['Laravel', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Redis', 'AWS (S3/EC2)', 'REST APIs']
  },
  {
    title: 'Architecture',
    fileIdentifier: 'architecture.drawio',
    skills: ['Microservices', 'Clean Architecture', 'Domain-Driven Design', 'Event-Driven Architecture', 'Design Patterns']
  },
  {
    title: 'DevOps',
    fileIdentifier: 'docker-compose.yml',
    skills: ['Docker', 'CI/CD Pipelines', 'GitHub Actions', 'Nginx', 'Linux/Bash', 'Git', 'Vercel']
  },
  {
    title: 'AI Tools',
    fileIdentifier: 'ai-workflow.py',
    skills: ['GitHub Copilot', 'ChatGPT / Claude API', 'Cursor', 'Prompt Engineering', 'LangChain', 'Ollama']
  }
]

const categories = props.skillGroups && props.skillGroups.length > 0 ? props.skillGroups : defaultSkillGroups
</script>

<template>
  <div id="skills" class="py-16 px-4 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-10 text-center md:text-left">
      <h2 class="text-3xl font-bold tracking-tight text-white flex items-center gap-3 justify-center md:justify-start">
        <span class="font-mono text-emerald-400 text-2xl">&lt;/&gt;</span>
        Technical Skills
      </h2>
      <p class="text-zinc-400 text-sm font-mono mt-2">
        // Grouped tech stack & development capabilities
      </p>
    </div>

    <!-- Code Block Grid Panels -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="category in categories"
        :key="category.title"
        class="rounded-xl border border-[#30363d] bg-[#161b22] shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-zinc-500 hover:shadow-2xl hover:shadow-emerald-500/5"
      >
        <!-- Code Window Header Bar -->
        <div class="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 py-2.5">
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="font-mono text-xs text-zinc-400 select-none">
            {{ category.fileIdentifier }}
          </span>
        </div>

        <!-- Panel Body -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-[#161b22]">
          <div>
            <h3 class="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 pb-2 border-b border-[#30363d] flex items-center justify-between">
              <span>// {{ category.title }}</span>
              <span class="text-zinc-500 text-[10px]">[{{ category.skills.length }} items]</span>
            </h3>

            <!-- Skills Tag Cloud -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="font-mono text-xs px-2.5 py-1.5 rounded-md bg-[#0d1117] border border-[#30363d] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors duration-200 cursor-default select-none"
              >
                [{{ skill }}]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>