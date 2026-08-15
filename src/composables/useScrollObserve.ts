import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollObserve() {
  let observer: IntersectionObserver

  onMounted(async () => {
    await nextTick()

    const targets = document.querySelectorAll('.reveal-on-scroll')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            // Only toggle off if the element is below or far above the viewport
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { 
        threshold: 0.05, // Lower threshold triggers the instant an edge touches the screen
        rootMargin: '50px 0px 50px 0px' // Pre-triggers slightly before scrolling into view
      }
    )

    targets.forEach((target) => {
      // Instant safety check: If it's already in the viewport on page load, reveal immediately
      const rect = target.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.classList.add('is-visible')
      }
      observer.observe(target)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}