<script setup lang="ts">
import routes from '@/router/routes'
</script>

<template>
  <ul class="menu">
    <li v-for="route in routes" :key="route.name">
      <RouterLink class="link" :to="{ name: route.name }">
        {{ route.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: 30px;
  padding: 0;
  text-transform: capitalize;
}

.link {
  text-decoration: none;
}
</style>
