<template>
  <div>
    <NuxtLayout name="main">
      <TheCart/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";
import TheCart from "../components/cart/TheCart";

definePageMeta({
  title: 'Корзина',
  layouts: false,
});

useHead({
  title: 'Корзина',
});

</script>

<style scoped>

</style>
