<template>
  <div>
    <div class="empty-layout text-center pt-10">
      <slot/>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.empty-layout {
  display: block;
  background-color: grey;
  height: 100vh;
}
</style>
