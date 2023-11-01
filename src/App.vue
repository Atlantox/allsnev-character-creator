<script setup>
import RoleplayManager from './components/RoleplayManager.vue';
</script>

<template>
  <RoleplayManager />
</template>

<style lang="scss">
@font-face {
    font-family: 'Cardinal';
    src: url('@/assets/fonts/Cardinal.ttf') format('truetype');
  }
  
  body {
      font-family: 'Cardinal', sans-serif !important;
      background-color: $primary;
      color: $font-color !important;
  }
</style>