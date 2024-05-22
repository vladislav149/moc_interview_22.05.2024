<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
</script>

<template>
  <div class="container">
    <HeaderMenu />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1220px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
