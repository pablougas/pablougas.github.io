<template>
  <v-container>
    <v-row align="center" class="mb-4" justify="space-between">
      <v-btn color="primary" @click="paused = !paused">
        {{ paused ? 'Play' : 'Pause' }}
      </v-btn>
      <v-slider
        v-model="speed"
        class="w-50"
        hide-details
        label="Speed"
        max="60"
        min="10"
        step="1"
        thumb-label
      />
      <v-select
        v-model="selectedCategory"
        class="w-25"
        clearable
        :items="categories"
        label="Filter by category"
      />
    </v-row>

    <v-row class="carousel-wrapper">
      <v-col
        v-for="(company, index) in filteredLogos"
        :key="index"
        class="company-card pa-0"
        :style="{
          animationDelay: `${(speed / companyLogos.length) * (companyLogos.length - index) * -1}s`,
          animationDuration: `${speed}s`,
          animationPlayState: paused ? 'paused' : 'running'
        }"
      >
        <a class="w-100 h-100" :href="company.link" target="_blank">
          <v-card class="pa-10 d-flex justify-center align-center w-100 h-100">
            <v-img contain :src="company.logo" />
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  import knockLogo from '@/assets/companies/knock-logo.png';
  import gettyLogo from '@/assets/companies/getty-logo.png';
  import istockLogo from '@/assets/companies/istock-logo.png';
  import rohinniLogo from '@/assets/companies/rohinni-logo.png';
  import intellitectLogo from '@/assets/companies/intellitect-logo.png';
  import verifyLogo from '@/assets/companies/verify-logo.png';
  import leaseraLogo from '@/assets/companies/leasera-logo.png';

  const speed = ref(28);
  const paused = ref(false);
  const selectedCategory = ref<string | null>(null);

  const companyLogos = [
    { logo: knockLogo, link: 'https://knock.com', category: 'Property Management' },
    { logo: gettyLogo, link: 'https://gettyimages.com', category: 'Media' },
    { logo: istockLogo, link: 'https://istockphoto.com', category: 'Media' },
    { logo: rohinniLogo, link: 'https://rohinni.com', category: 'Hardware' },
    { logo: intellitectLogo, link: 'https://intellitect.com', category: 'Consulting' },
    { logo: verifyLogo, link: 'https://verify.com', category: 'Analytics' },
    { logo: leaseraLogo, link: 'https://leasera.com', category: 'Property Management' },
  ];

  const categories = [...new Set(companyLogos.map(c => c.category))];

  const filteredLogos = computed(() => {
    if (!selectedCategory.value) return companyLogos;
    return companyLogos.filter(c => c.category === selectedCategory.value);
  });
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  height: 220px;
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
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

@keyframes scroll-left {
  to {
    left: -200px;
  }
}
</style>
