<template>
  <v-row class="mt-15">
    <v-col
      v-for="(logo, index) in companyLogos"
      :key="index"
      cols="4"
      lg="2"
      sm="3"
    >
      <v-card
        class="pa-10 d-flex justify-center align-center"
        min-height="100%"
        min-width="100%"
        variant="outlined"
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

  const companyLogos = [
    knockLogo,
    gettyLogo,
    istockLogo,
    rohinniLogo,
    intellitectLogo,
    verifyLogo,
  ];
</script>
