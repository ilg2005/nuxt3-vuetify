<template>
  <NuxtLayout name="main">
    <!--
        <div class="mt-10 text-center">Карточки товара на индексную страницу</div>
    -->
    <div class="mt-10 text-center text-white">
      {{ pending ? 'Loading...' : products }}
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


const {pending, data: products} = useLazyAsyncData('serverItems', () => $fetch('http://nuxt3-shop.phpmaster.pw/test-server.php'));
console.log('data:', products.value);
watch(products, (newProducts, oldProducts) => {
  console.log('newProducts: ', newProducts);
  console.log('oldProducts: ', oldProducts);
})
//const products = computed(() => data.value.products);
/*console.log(data.value);

  useState('products', () => data.products);
  useState('categories', () => data.categories);*/


</script>
