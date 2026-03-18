<script setup>
import VappHeader from './components/VappHeader.vue';
</script>

<template>
  <v-app>
    <vapp-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>
