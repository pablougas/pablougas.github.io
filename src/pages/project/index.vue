<template>
  <v-container v-if="project" class="pa-10">
    <v-breadcrumbs divider="." :items="items" />
    <v-row class="text-h3 text-mono mt-10">{{ project.name }}</v-row>
    <v-row class="mt-15" direction="column" justify="center">
      <v-col cols="12" lg="5" md="6">
        <v-img :src="project.thumbnail" />
      </v-col>
      <v-col cols="12">
        <p class="text-body-1" v-html="project.description" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card rounded="lg" variant="outlined" width="100%">
          <v-card-text v-if="project.component">
            <project.component />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import projects from '@/data/projects';
  import type { Project } from '@/data/types/project';

  const route = useRoute()
  const { id } = route.query

  const project: Project | undefined = projects.find((project: Project) => project.id === id)

  const items = [
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
    {
      title: 'Projects',
      disabled: false,
      href: '/projects',
    },
  ]
</script>
