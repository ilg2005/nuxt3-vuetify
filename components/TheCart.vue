<template>
  <v-container class="card mt-10">

    <h3 class="text-center" v-if="!cart.length">В корзине пока ничего нет</h3>
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
        <tr v-for="item in cart"
            :key="item.id"
        >
          <td>{{ getProductTitle(item.id) }}</td>
          <td>
            <button class="btn primary" @click="increaseQuantity(item)">+</button>
            {{ item.quantity }} шт.
            <button class="btn danger" @click="decreaseQuantity(item)">-</button>
          </td>
          <td>{{ calculatePrice(item) }} руб.</td>
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
const increaseQuantity = item => item.quantity++;
const removeItemFromCart = item => {
  const index = cart.value.indexOf(item);
  if (index > -1) {
    cart.value.splice(index, 1);
  }
};
const decreaseQuantity = item => {
  item.quantity === 1 ? removeItemFromCart(item) : item.quantity--;
}
const getProductPrice = productId => products.value.find(product => product.id === productId).price;

const calculatePrice = item => item.quantity * getProductPrice(item.id);
</script>

<style scoped>

</style>
