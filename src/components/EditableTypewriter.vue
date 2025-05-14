<template>
  <v-card class="pa-4" elevation="2">
    <v-card-title>Typewriter Component</v-card-title>
    <v-card-text>
      <div ref="outputRef" class="typewriter-output" />

      <v-textarea
        v-model="textInput"
        auto-grow
        class="mt-4"
        label="Enter texts (one per line)"
      />

      <v-slider
        v-model="delay"
        class="mt-4"
        label="Character delay (ms)"
        :max="500"
        :min="20"
      />

      <v-slider
        v-model="pauseBetween"
        class="mt-4"
        label="Pause between words (ms)"
        :max="3000"
        :min="100"
      />

      <v-switch v-model="loop" label="Loop" />

      <v-btn class="mt-4" @click="startTyping">Start</v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, ref } from 'vue'

  const outputRef = ref<HTMLElement | null>(null)
  const delay = ref(100)
  const pauseBetween = ref(1000)
  const loop = ref(true)
  const textInput = ref('Hello\nWorld\nTypewriter')
  let isCancelled = false

  // Utility function to wait
  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  // Core typewriter function
  async function runTypewriterCycle (
    texts: string[],
    element: HTMLElement,
    delayMs: number,
    pauseMs: number,
  ) {
    let i = 0
    while (!isCancelled) {
      const text = texts[i]
      element.textContent = ''
      for (let j = 0; j < text.length && !isCancelled; j++) {
        element.textContent += text[j]
        await wait(delayMs)
      }

      if (isCancelled) break

      await wait(pauseMs)

      i = (i + 1) % texts.length
      if (!loop.value && i === 0) break
    }
  }

  function startTyping () {
    isCancelled = true
    setTimeout(() => {
      isCancelled = false
      if (outputRef.value) {
        const texts = textInput.value.split('\n').filter(Boolean)
        runTypewriterCycle(texts, outputRef.value, delay.value, pauseBetween.value)
      }
    }, 50)
  }

  onBeforeUnmount(() => {
    isCancelled = true
  })
</script>

<style scoped>
.typewriter-output {
  font-size: 24px;
  font-family: 'Courier New', monospace;
  min-height: 32px;
}
</style>
