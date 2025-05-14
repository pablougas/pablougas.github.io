<template>
  <v-container class="pa-10">
    <v-breadcrumbs divider="." :items="items" />
    <v-row class="text-h3 text-mono mt-10">Projects</v-row>
    <v-row class="mt-15">
      <v-col
        v-for="project in projects"
        :key="project.name"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card
          class="mx-auto"
          rounded="lg"
          style="background: rgba(255, 255, 255, 0.15);"
          :to="{ path: 'project', query: { id: project.id } }"
        >
          <v-img cover height="160px" :src="project.thumbnail" />
          <v-card-text class="d-flex flex-column ga-4 pt-5">
            <div class="d-flex align-center justify-space-between">
              <div>
                <p class="text-h5 font-weight-bold">{{ project.name }}</p>
                <p class="text-subtitle2">{{ project.stack }}</p>
              </div>
            </div>
            <div>
              <h4 class="mt-3 text-caption text-uppercase font-weight-medium">Project Summary</h4>
              <p class="text-body-1 text-truncate">{{ project.shortSummary }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import projects from '@/data/projects';

  const items = [
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
  ]
</script>
