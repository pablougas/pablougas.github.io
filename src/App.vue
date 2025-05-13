<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  background: black;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>
