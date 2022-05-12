<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup>
import {useHead} from "nuxt/app";

useHead({
  titleTemplate: (title) => `Nuxt 3 Shop | ${title}`,
  link: [
    {
      rel: 'shortcut icon',
      href: '/icon_64x64.a3b4ce.png',
      as: 'favicon'
    }
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'description', content: 'My amazing shop.'}
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>


<style>

</style>
