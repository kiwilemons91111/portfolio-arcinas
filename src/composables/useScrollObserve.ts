import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollObserve() {
  let observer: IntersectionObserver

  const initObserver = () => {
    const targets = document.querySelectorAll('.reveal-on-scroll')

    // Safety fallback: if no elements found or observer unsupported, reveal immediately
    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // Trigger once on scroll down
          }
        })
      },
      { threshold: 0.05 }
    )

    targets.forEach((target) => {
      // Immediate check: If element is inside initial viewport, reveal right away
      const rect = target.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.classList.add('is-visible')
      }
      observer.observe(target)
    })
  }

  onMounted(async () => {
    await nextTick()
    // 50ms delay gives the production DOM enough time to fully mount component templates
    setTimeout(initObserver, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}