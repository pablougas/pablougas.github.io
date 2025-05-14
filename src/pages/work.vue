<template>
  <v-container class="pa-10">
    <v-row class="text-h3 text-mono mt-10">Work</v-row>
    <v-row class="mt-15">
      <v-col
        v-for="work in works"
        :key="work.name"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card class="mx-auto" rounded="lg" style="background: rgba(255, 255, 255, 0.15);">
          <v-img cover height="160px" :src="work.thumbnail" />
          <v-card-text class="d-flex flex-column ga-4 pt-5">
            <div class="d-flex align-center justify-space-between">
              <div>
                <p class="text-h5 font-weight-bold">{{ work.name }}</p>
                <p class="text-subtitle2">{{ work.stack }}</p>
              </div>
              <v-img max-width="18%" :src="work.logo" />
            </div>
            <div>
              <h4 class="mt-3 text-caption text-uppercase font-weight-medium">Summary</h4>
              <p class="text-body-1">{{ work.shortSummary }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import works from '@/data/works'
</script>
