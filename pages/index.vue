<template>
  <NuxtLayout name="main">
    <Shop/>
  </NuxtLayout>
</template>

<script setup>
import {useHead} from "nuxt/app";
import Shop from "../components/index/Shop";

definePageMeta({
  layout: false,
  title: 'Магазин'
});
useHead({
  title: 'Магазин'
})

</script>
