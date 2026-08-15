import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollObserve() {
  let observer: IntersectionObserver

  onMounted(async () => {
    await nextTick()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class when element enters viewport (scroll down or up)
            entry.target.classList.add('is-visible')
          } else {
            // Remove class when element exits viewport
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.1 } // Triggers when 10% of the section is in view
    )

    const targets = document.querySelectorAll('.reveal-on-scroll')
    targets.forEach((target) => observer.observe(target))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}