<template>
  <v-row class="mt-15">
    <v-col cols="12" lg="4" md="5" sm="6">
      <v-card class="experience-card" rounded="lg">
        <v-card-text class="pa-10">
          <v-row>
            <v-col class="font-weight-bold" cols="12">
              <span class="text-h2 font-weight-bold mr-2" cols="12">
                {{ years }}
              </span>
              <span>years of experience</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Designing, developing and building cool web apps and API's since 2015</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="8" md="7" sm="6">
      <v-row>
        <v-col
          v-for="(tech, index) in techLogos"
          :key="index"
          class="pb-8 px-4"
          :class="{'pt-8': xs}"
          cols="6"
          md="4"
        >
          <v-card
            class="pa-10 d-flex justify-center align-center flex-column"
            color="secondary"
            min-height="100%"
            min-width="100%"
            rounded="lg"
            variant="outlined"
          >
            <div>
              <v-img max-width="60px" min-width="80px" :src="tech.icon" />
            </div>
            <p class="font-weight-bold text-white" style="text-wrap: nowrap;">{{ tech.years }}+ years</p>
            <p class="text-center text-white caption">{{ tech.text }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import js from '@/assets/techIcons/js.png';
  import python from '@/assets/techIcons/python.png';
  import rails from '@/assets/techIcons/rails.png';
  import { yearsSinceDate } from '@/utils/timeSince';
  import { useDisplay } from 'vuetify';

  const years = yearsSinceDate('06-01-2015');
  const { xs } = useDisplay()

  const techLogos = [
    {
      icon: js,
      years: 6,
      text: ' React, Vue, Node',
    },
    {
      icon: python,
      years: 3,
      text: 'Python',
    },
    {
      icon: rails,
      years: 3,
      text: 'Ruby on Rails',
    },
  ]
</script>

<style lang="scss" scoped>
.experience-card {
  background: #FF4C29;
  background: linear-gradient(to bottom right,rgba(255, 76, 41, 1) 0%, rgba(0, 0, 0, 1) 90%);
}
</style>
