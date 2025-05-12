<template>
  <v-row class="mt-15 carousel-wrapper">
    <v-col
      v-for="(logo, index) in companyLogos"
      :key="index"
      class="company-card pa-0"
      :style="{ animationDelay: `${28 / 7 * (7 - index) * -1}s` }"
    >
      <v-card
        class="pa-10 d-flex justify-center align-center"
        min-height="100%"
        min-width="100%"
      >
        <v-img :src="logo" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import knockLogo from '@/assets/companies/knock-logo.png';
  import gettyLogo from '@/assets/companies/getty-logo.png';
  import istockLogo from '@/assets/companies/istock-logo.png';
  import rohinniLogo from '@/assets/companies/rohinni-logo.png';
  import intellitectLogo from '@/assets/companies/intellitect-logo.png';
  import verifyLogo from '@/assets/companies/verify-logo.png';
  import leaseraLogo from '@/assets/companies/leasera-logo.png';

  const companyLogos = [
    knockLogo,
    gettyLogo,
    istockLogo,
    rohinniLogo,
    intellitectLogo,
    verifyLogo,
    leaseraLogo,
  ];
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  height: 240px;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
    );
  .company-card {
    display: flex;
    align-items: center;
    height: 150px;
    position: absolute;
    left: max(calc(200px * 7), 100%);
    width: 200px;
    animation-name: scroll-left;
    animation-duration: 28s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

@media (max-width="720") {

}

@keyframes scroll-left {
  to {
    left: -200px;
  }
}
</style>
