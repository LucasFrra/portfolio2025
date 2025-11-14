<template>
  <div class="min-h-screen flex flex-col relative">
    
    <div class="safe-top"></div>
      <div class="safe-bottom"></div>
    <AnimatedMeshBackground :colors="['#16a34a', '#16a34a', '#16a34a']" :opacity="0.66" blend="soft-light"
      pattern="dots" :patternOpacity="0.48" :patternSize="30" patternBlend="soft-light" />

      
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