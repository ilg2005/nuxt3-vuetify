<template>
  <NuxtLayout name="main">
    <div class="mt-10 text-center">Карточки товара на индексную страницу</div>
  </NuxtLayout>
</template>

<script setup>
import {useHead} from "nuxt/app";

definePageMeta({
  layout: false,
});
useHead({
  title: 'Магазин'
})
</script>
