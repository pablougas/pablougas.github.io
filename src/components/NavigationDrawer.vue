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
        v-for="link in links"
        :key="link.title"
        class="link"
        color="#90ee90"
        :prepend-icon="link.icon"
        :title="link.title"
        :to="{ path: link.to }"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify';

  const { smAndDown, mdAndUp } = useDisplay()
  const drawer = ref(mdAndUp)

  const links = [
    { icon: 'mdi-home',
      title: 'Home',
      to: '/',
    }
    ,
    { icon: 'mdi-account-circle',
      title: 'About',
      to: 'about',
    },
    { icon: 'mdi-account-hard-hat-outline',
      title: 'Work',
      to: 'work',
    },
    { icon: 'mdi-database-outline',
      title: 'Stack',
      to: 'stack',
    },
    {
      icon: 'mdi-folder-heart-outline',
      title: 'Projects',
      to: 'projects',
    },
    { icon: 'mdi-newspaper-variant-outline',
      title: 'Posts',
      to: 'posts',
    },
    { icon:'mdi-link-box-outline',
      title:'Connect',
      to:'connect',
    },
  ]
</script>

<style lang="scss" scoped>
.link {
  &:hover {
    color: lightgreen;
  }
}
</style>
