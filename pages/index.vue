<template>
  <NuxtLayout name="main">
<!--
    <div class="mt-10 text-center">Карточки товара на индексную страницу</div>
-->
    <div class="mt-10 text-center">
      {{ pending ? 'Loading...' : data }}
    </div>
  </NuxtLayout>
</template>

<script setup>
import {useHead, useAsyncData, useState} from "nuxt/app";

definePageMeta({
  layout: false,
  title: 'Магазин'
});
useHead({
  title: 'Магазин'
})


const { data, pending } = useAsyncData('serverItems', () => $fetch('http://nuxt3-shop.phpmaster.pw/test-server.php'));

//const products = computed(() => data.value.products);
/*console.log(data.value);

  useState('products', () => data.products);
  useState('categories', () => data.categories);*/


</script>
