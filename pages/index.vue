<template>
  <NuxtLayout name="main">
    <!--
        <div class="mt-10 text-center">Карточки товара на индексную страницу</div>
    -->
    <div class="mt-10 text-center text-white">
      {{ products }}
    </div>
  </NuxtLayout>
</template>

<script setup>
import {useHead, useState} from "nuxt/app";

definePageMeta({
  layout: false,
  title: 'Магазин'
});
useHead({
  title: 'Магазин'
})


const {data} = await useLazyAsyncData('serverItems', () => $fetch('http://nuxt3-shop.phpmaster.pw/test-server.php'));

const products = useState('products', () => data.value.products);
useState('categories', () => data.value.categories);

</script>
