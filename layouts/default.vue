<template>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main class="flex-1">
      <NuxtPage :transition="{ name: 'page' }" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>