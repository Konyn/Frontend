<template>
  <header-component />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/header-component.vue';
</script>
