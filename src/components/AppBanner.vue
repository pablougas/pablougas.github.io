<template>
  <v-row class="banner">
    <v-col
      class="title d-flex pa-10 flex-column justify-center align-center"
      cols="12"
    >
      <div class="relative text-start">
        <h4 class="text-h5">Hello, I'm Pablo Ugas <span class="text-disabled">and</span></h4>
        <h1 class="text-h3 font-weight-bold">
          I'm a
          <span ref="type" class="scrolling-txt" />
        </h1>
      </div>
    </v-col>
    <div class="scroll-btn" @click="scrollDown" />
  </v-row>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const type = ref<HTMLElement | null>(null);
  const titleList = ['Learner', 'Builder', 'Tinkerer', 'Bug Chaser', 'Software Engineer'];

  const init = async () => {
    if (!type.value) return; // Avoid infinite recursion

    for (let i = 0; i < titleList.length; i++) {
      console.log(titleList[i])
      await runTypewriter(titleList[i], type.value, 100);
      // avoid clearing the title when its made it to the end
      if (i < titleList.length - 1) {
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

  const scrollDown = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  onMounted(() => {
    init();
  });
</script>

<style lang="scss" scoped>
.banner {
  background-color: black;
  position: relative;
  // subtract height of our footer and scroller
  height: calc(100vh - 250px);
  overflow: hidden;

  .title {
    background: black;
    color: white;
    min-height: 280px;
    div {
      width: 100%;
      max-width: 630px;
    }
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

  .scroll-btn {
    position: absolute;
    bottom: 2em;
    left: calc(50% - 1.25em);
    height: 4em;
    width: 2.5em;
    border: 0.1em solid #fff;
    border-radius: 3em;
    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      margin: auto;
      left: 0;
      right: 0;
      margin: auto;
      height: 0.25em;
      width: 0.25em;
      background: #fff;
      border-radius: 50%;
      animation: move-down 2s infinite;
    }

    &:after {
      position: absolute;
      content: "SCROLL DOWN";
      width: 7em;
      display: block;
      text-align: center;
      bottom: -2em;
      color: #fff;
      left: -2.5em;
    }

    &:hover {
      background: lightgreen;
      &:after {
        color: lightgreen;
      }
    }
  }
}

@keyframes move-down {
  80% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(2.3em);
    opacity: 0;
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
