<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    isEnabled?: boolean
  }>(),
  {
    isEnabled: true
  }
)

const canvasRef = ref<HTMLCanvasElement | null>(null)

let targetX = 0
let targetY = 0
let mouseX = 0
let mouseY = 0
let animationFrameId: number | null = null

// Sonar pulse rings interface
interface Ring {
  radius: number
  maxRadius: number
  alpha: number
}

const rings: Ring[] = []
let lastPulseTime = 0

const handleMouseMove = (e: MouseEvent) => {
  targetX = e.clientX
  targetY = e.clientY

  // Spawn a sonar ping every 400ms as the cursor moves
  const now = Date.now()
  if (now - lastPulseTime > 400) {
    rings.push({
      radius: 10,
      maxRadius: 220,
      alpha: 0.35
    })
    lastPulseTime = now
  }
}

const resizeCanvas = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

const render = () => {
  if (!canvasRef.value || !props.isEnabled) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  // Smooth cursor inertia
  mouseX += (targetX - mouseX) * 0.18
  mouseY += (targetY - mouseY) * 0.18

  const width = canvasRef.value.width
  const height = canvasRef.value.height

  ctx.clearRect(0, 0, width, height)

  // 1. Core Emerald Glow
  const glow = ctx.createRadialGradient(
    mouseX,
    mouseY,
    0,
    mouseX,
    mouseY,
    260
  )
  glow.addColorStop(0, 'rgba(16, 185, 129, 0.20)')
  glow.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)')
  glow.addColorStop(1, 'rgba(16, 185, 129, 0)')

  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)

  // 2. Expanding Sonar Rings
  for (let i = rings.length - 1; i >= 0; i--) {
    const ring = rings[i]
    if (!ring) continue // Guard clause to fix TS 'possibly undefined' error

    ring.radius += 1.8
    ring.alpha = (1 - ring.radius / ring.maxRadius) * 0.35

    if (ring.radius >= ring.maxRadius || ring.alpha <= 0) {
      rings.splice(i, 1)
      continue
    }

    ctx.beginPath()
    ctx.arc(mouseX, mouseY, ring.radius, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(16, 185, 129, ${ring.alpha})`
    ctx.lineWidth = 1
    // Dotted sonar ring style
    ctx.setLineDash([4, 4])
    ctx.stroke()
    ctx.setLineDash([]) // reset
  }

  // 3. Small Center Core Target
  ctx.beginPath()
  ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2)
  ctx.fillStyle = '#10b981'
  ctx.fill()

  animationFrameId = requestAnimationFrame(render)
}

const startAnimation = () => {
  if (!animationFrameId) render()
}

const stopAnimation = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d')
    ctx?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  }
}

watch(
  () => props.isEnabled,
  (enabled) => {
    if (enabled) startAnimation()
    else stopAnimation()
  }
)

onMounted(() => {
  resizeCanvas()

  targetX = window.innerWidth / 2
  targetY = window.innerHeight / 2
  mouseX = targetX
  mouseY = targetY

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('resize', resizeCanvas)

  if (props.isEnabled) startAnimation()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', resizeCanvas)
  stopAnimation()
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full"
  />
</template>