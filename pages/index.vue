<template>
    <NuxtLayout name="main">
      Карточки товара на индексную страницу
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
