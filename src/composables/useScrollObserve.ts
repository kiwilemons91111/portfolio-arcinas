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
            entry.target.classList.add('is-visible')
          } else {
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
    setTimeout(initObserver, 50)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}