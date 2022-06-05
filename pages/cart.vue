<template>
  <div>
    <NuxtLayout name="main">
      <TheCart/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import {useHead, useState} from "nuxt/app";
import AuthForm from "../components/AuthForm";
import TheCart from "../components/TheCart";

definePageMeta({
  title: 'Корзина',
  layouts: false,
});

useHead({
  title: 'Корзина',
});

const products = useState('products');
const categories = useState('categories');
</script>

<style scoped>

</style>
