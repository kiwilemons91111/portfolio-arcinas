import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollObserve() {
  let observer: IntersectionObserver

  const initObserver = () => {
    const targets = document.querySelectorAll('.reveal-on-scroll')

    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade in when scrolled into view
            entry.target.classList.add('is-visible')
          } else {
            // Reset class when scrolled out of view so it re-animates next time
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.05 }
    )

    targets.forEach((target) => observer.observe(target))
  }

  onMounted(async () => {
    await nextTick()
    // Small timeout ensures production bundles finish mounting template DOM nodes
    setTimeout(initObserver, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}