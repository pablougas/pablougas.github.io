<template>
  <div class="about-wrapper">
    <v-card class="pa-8 about" rounded="0" variant="flat">
      <v-card-text>
        <SkillsSection />
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.about-wrapper {
  height: 50vh;
  width: 100vw;
  position: relative;
  .about {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 50vh;
    width: 100vw;
    position: absolute;
    left: 0;
  }
}

@media (min-width: 1264px) {
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
