<template>
  <div>
    <NuxtLayout name="main">
      Контент корзины
    </NuxtLayout>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

definePageMeta({
  layouts: false
});
useHead({
  title: 'Корзина'
});

</script>

<style scoped>

</style>
