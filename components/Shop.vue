<template>
  <div class="card">
    <div class="products-filter">
      <div class="form-control">
        <input type="text" placeholder="Найти товар...">
        <span class="form-control-clear">&times;</span>
      </div>

      <ul class="list">
        <li class="list-item">Все</li>
        <li v-for="category in categories"
            :key="category.id"
            class="list-item">
          {{ category.title }}
        </li>
      </ul>
    </div>
    <div class="products-table">
      <div class="product-card"
           v-for="product in products"
           :key="product.id"
      >
        <div class="product-img">
          <img :src="product.img">
        </div>
        <h4 class="product-title">{{ product.title}}</h4>
        <div class="text-center">
          <button class="btn" :class="{ 'btn-success': product.count }">{{ product.count ? `в наличии: ${product.count}` : 'нет в наличии'}}</button>
          <!--          <div class="product-controls">-->
          <!--            <button class="btn danger">-</button>-->
          <!--            <strong>123</strong>-->
          <!--            <button class="btn primary">+</button>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useState} from "nuxt/app";

const {data} = await useLazyAsyncData('serverItems', () => $fetch('http://nuxt3-shop.phpmaster.pw/test-server.php'));

const products = useState('products', () => data.value.products);
const categories = useState('categories', () => data.value.categories);
</script>

<style scoped>
.card {
  border-radius: 4px;
  padding: 0;
  display: flex;
}
</style>
