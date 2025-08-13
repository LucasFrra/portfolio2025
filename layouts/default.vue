<template>
  <div class="min-h-screen flex flex-col relative">
    <AnimatedMeshBackground :colors="['#16a34a', '#22d3ee', '#84cc16']" :opacity="0.26" blend="soft-light" pattern="dots"
      :patternOpacity="0.18" :patternSize="30" patternBlend="soft-light" />
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