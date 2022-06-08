<template>
  <v-container class="card mt-10">

    <h3 class="text-center" v-if="!cart.length">В корзине пока ничего нет</h3>
    <div v-else>
      <table class="table">
        <thead>
        <tr>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in cart"
            :key="item.id"
        >
          <td>{{ getProduct(item.id).title }}</td>
          <td>
            <button class="btn danger" @click="decreaseQuantity(item)">-</button>
            {{ item.quantity }} шт.
            <button class="btn primary" @click="item.quantity++">+</button>
          </td>
          <td>{{ item.cost = calculateItemCost(item) }} руб.</td>
        </tr>
        </tbody>
      </table>
      <hr>
      <p class="text-right mb-5"><strong>Всего: {{ total }} руб.</strong></p>
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
const getProduct = id => products.value.find(product => product.id == id);

const removeItemFromCart = item => {
  const index = cart.value.indexOf(item);
  if (index > -1) {
    cart.value.splice(index, 1);
  }
};
const decreaseQuantity = item => {
  item.quantity === 1 ? removeItemFromCart(item) : item.quantity--;
}
const calculateItemCost = item => item.quantity * getProduct(item.id).price;
const total = computed(() => cart.value.reduce((acc, it) => acc + it.cost, 0));

</script>

<style scoped>

</style>
