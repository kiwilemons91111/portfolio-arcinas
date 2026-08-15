import { onMounted, onUnmounted } from 'vue'

export function useScrollObserve() {
  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    )

    // Target all elements with the 'reveal-on-scroll' class
    const targets = document.querySelectorAll('.reveal-on-scroll')
    targets.forEach((target) => observer.observe(target))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}