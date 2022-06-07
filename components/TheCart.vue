<template>
  <v-container class="card mt-10">

    <h3 class="text-center" v-if="!cart">В корзине пока ничего нет</h3>
    <div v-else>
      <table class="table">
        <thead>
        <tr>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена (шт)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in cart"
            :key="product.id"
        >
          <td>{{ getProductTitle(product.id) }}</td>
          <td>
            <button class="btn primary" @click="increaseQuantity(product.id)">+</button>
            {{ product.quantity }} шт.
            <button class="btn danger">-</button>
          </td>
          <td>42 000 руб.</td>
        </tr>
        </tbody>
      </table>
      <hr>
      <p class="text-right"><strong>Всего: 14 200 руб.</strong></p>
      <p class="text-right">
        <button class="btn">Оплатить</button>
      </p>
    </div>
  </v-container>
</template>

<script setup>
import {useState} from "nuxt/app";

const cart = useState('cart', () => [
  {id: 2, quantity: 3},
  {id: 5, quantity: 1},
]);
const products = useState('products');
const getProductTitle = id => products.value.find(product => product.id == id).title;
const increaseQuantity = id => cart.value.find(product => product.id == id).quantity++;
</script>

<style scoped>

</style>
