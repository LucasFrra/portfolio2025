<template>
  <LoadingScreen />

  <div class="min-h-screen flex flex-col">
    <Nav />

    <main class="flex-1 relative overflow-hidden h-full">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>