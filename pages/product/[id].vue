<template>
  <NuxtLayout name="main">
    Товар с id #
  </NuxtLayout>

</template>

<script setup>
import {useHead} from "nuxt/app";

definePageMeta({
  layouts: false
});
useHead({
  title: 'Товар'
});
</script>

<style scoped>

</style>
