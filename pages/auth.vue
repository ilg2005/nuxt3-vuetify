<template>
  <div>
    <NuxtLayout name="auth">
      The rest of the authorization page
    </NuxtLayout>

  </div>
</template>

<script setup>

import {useHead} from "nuxt/app";

definePageMeta({
  layout: false,
});
useHead({
  title: 'Вход'
});

</script>

<style scoped>

</style>
