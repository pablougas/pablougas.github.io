<template>
  <v-app-bar v-if="smAndDown" :elevation="2">
    <template #prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </template>

  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    permanent
  >
    <v-list>
      <v-list-item>
        <v-card height="160" width="160">
          <v-img cover src="@/assets/me.jpg" />
        </v-card>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        :to="{ path: '/' }"
      />
      <v-list-item
        prepend-icon="mdi-account-circle"
        title="About Me"
        :to="{ path: 'about' }"
      />
      <v-list-item
        prepend-icon="mdi-folder-heart-outline"
        title="Projects"
        value="users"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify';

  const { smAndDown, mdAndUp } = useDisplay()
  const drawer = ref(mdAndUp)
</script>
