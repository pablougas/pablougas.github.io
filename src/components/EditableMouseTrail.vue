<template>
  <v-card class="pa-4" elevation="3">
    <v-card-title>Mouse Trail Demo</v-card-title>
    <v-card-text>
      <div class="canvas-wrapper">
        <canvas ref="canvasRef" />
      </div>

      <div class="controls mt-4">
        <v-slider
          v-model="dotSize"
          class="mb-2"
          label="Dot Size"
          max="50"
          min="2"
        />
        <v-slider
          v-model="dotCount"
          class="mb-2"
          label="Max Dots"
          max="100"
          min="5"
        />

        <v-select
          v-model="shape"
          class="mb-2"
          :items="['circle', 'square']"
          label="Shape"
        />

        <v-select
          v-model="colorMode"
          class="mb-2"
          :items="['animated', 'fixed']"
          label="Color Mode"
        />

        <v-color-picker
          v-if="colorMode === 'fixed'"
          v-model="fixedColor"
          class="mt-2"
          flat
          hide-canvas
          hide-inputs
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const dotSize = ref(10)
  const dotCount = ref(25)
  const shape = ref<'circle' | 'square'>('circle')
  const colorMode = ref<'animated' | 'fixed'>('animated')
  const fixedColor = ref('#ff3366')

  interface Dot {
    x: number
    y: number
    hue: number
  }

  const trail: Dot[] = []

  let mouseX = 0
  let mouseY = 0
  let isMouseMoving = false
  let lastMouseMove = Date.now()
  let hueBase = 0
  let animationFrameId: number

  function update (ctx: CanvasRenderingContext2D) {
    const now = Date.now()
    isMouseMoving = now - lastMouseMove < 100

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    if (isMouseMoving) {
      trail.push({ x: mouseX, y: mouseY, hue: hueBase % 360 })
      if (colorMode.value === 'animated') hueBase += 1
    }

    while (trail.length > dotCount.value) trail.shift()

    for (let i = 0; i < trail.length; i++) {
      const { x, y, hue } = trail[i]
      const alpha = i / trail.length
      const size = dotSize.value * (alpha + 0.5)

      ctx.beginPath()
      if (shape.value === 'circle') {
        ctx.arc(x, y, size, 0, Math.PI * 2)
      } else {
        ctx.rect(x - size / 2, y - size / 2, size, size)
      }

      ctx.globalAlpha = alpha
      ctx.fillStyle =
        colorMode.value === 'fixed' ? fixedColor.value : `hsl(${hue}, 100%, 65%)`
      ctx.fill()
    }

    ctx.globalAlpha = 1
    animationFrameId = requestAnimationFrame(() => update(ctx))
  }

  onMounted(() => {
    const canvas = canvasRef.value!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      const container = canvas.parentElement!
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resize()

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      lastMouseMove = Date.now()
    })

    update(ctx)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId)
  })
</script>

<style scoped>
.canvas-wrapper {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
