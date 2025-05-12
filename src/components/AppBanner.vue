<template>
  <v-row class="banner">
    <v-col
      class="title d-flex pa-10 flex-column justify-center"
      cols="12"
      order-sm="1"
      sm="7"
    >
      <div class="relative">
        <h4 class="text-h5">Hello, I'm Pablo Ugas</h4>
        <h1 class="text-h3 font-weight-bold title absolute">
          I'm a
          <span ref="type" class="scrolling-txt" />
        </h1>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const type = ref<HTMLElement | null>(null);
  const titleList = ['Software Engineer', 'Builder', 'Husband', 'Father'];

  const init = async () => {
    if (!type.value) return; // Avoid infinite recursion

    while (true) {
      for (const title of titleList) {
        await runTypewriter(title, type.value, 100);
        await delay(1000); // Wait after typing
        type.value.textContent = ''; // Clear before next title
        await delay(200); // Small pause before typing next title
      }
    }
  };

  function runTypewriter (
    text: string,
    el: HTMLElement,
    delay: number
  ): Promise<void> {
    return new Promise(resolve => {
      let index = 0;

      function typeNextChar () {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(typeNextChar, delay);
        } else {
          resolve();
        }
      }

      el.textContent = '';
      typeNextChar();
    });
  }

  function delay (ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onMounted(() => {
    init();
  });
</script>

<style lang="scss" scoped>
.banner {
  height: 60vh;
  overflow: hidden;
  background-color: black;

  .title {
    background: black;
    color: white;
    min-height: 280px;
  }

  .scrolling-txt {
    height: 60px;
    font-size: 60px;
    color: #ff4c29;

    &:after {
      content: '|';
      animation: blink 0.8s step-start infinite;
      margin-left: 2px;
      color: currentColor;
    }
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
