<template>
  <canvas ref="canvasRef" />
</template>

<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const canvasRef = ref<HTMLCanvasElement | null>(null)

  interface Dot {
    x: number
    y: number
    hue: number
  }

  const trail: Dot[] = []
  const maxDots = 25
  const radius = 10

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let isMouseMoving = false
  let lastMouseMove = Date.now()
  let hueBase = 0
  let animationFrameId: number

  // Update function
  function update (ctx: CanvasRenderingContext2D) {
    const now = Date.now()
    isMouseMoving = now - lastMouseMove < 100

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Only add new dot if mouse is moving
    if (isMouseMoving) {
      trail.push({
        x: mouseX,
        y: mouseY,
        hue: hueBase % 360,
      })
      hueBase += 1 // slow color change
    }

    while (trail.length > maxDots) trail.shift()

    for (let i = 0; i < trail.length; i++) {
      const { x, y, hue } = trail[i]
      const alpha = i / trail.length
      ctx.beginPath()
      ctx.arc(x, y, radius * (alpha + 0.5), 0, Math.PI * 2)
      ctx.fillStyle = `hsl(${hue}, 100%, 65%)`
      ctx.globalAlpha = alpha
      ctx.fill()
    }

    ctx.globalAlpha = 1
    animationFrameId = requestAnimationFrame(() => update(ctx))
  }

  // Setup
  onMounted(() => {
    const canvas = canvasRef.value!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => {
      mouseX = e.clientX
      mouseY = e.clientY
      lastMouseMove = Date.now()
    })

    update(ctx)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId)
  })
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 80%;
}
</style>
