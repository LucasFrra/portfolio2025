<template>
  <div class="min-h-screen flex flex-col">
    <LoadingScreen />
    <Nav />

    <main class="flex-1 relative overflow-hidden h-full">
      <Transition name="page" mode="out-in">
        <component :is="'div'" :key="$route.fullPath">
          <PageWrapper />
        </component>
      </Transition>
    </main>

    <Footer />
  </div>
</template>


<script lang="ts" setup>

</script>

<style></style>