<template>
  <NuxtLayout name="main">
    <!--
        <div class="mt-10 text-center">Карточки товара на индексную страницу</div>
    -->
    <div class="mt-10 text-center text-white">
      {{ pending ? 'Loading...' : data.products }}
    </div>
  </NuxtLayout>
</template>

<script setup>
import {useHead} from "nuxt/app";

definePageMeta({
  layout: false,
  title: 'Магазин'
});
useHead({
  title: 'Магазин'
})


const {pending, data} = useLazyAsyncData('serverItems', () => $fetch('http://nuxt3-shop.phpmaster.pw/test-server.php'));
console.log(data.value);
//const products = computed(() => data.value.products);
/*console.log(data.value);

  useState('products', () => data.products);
  useState('categories', () => data.categories);*/


</script>
