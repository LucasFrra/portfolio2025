<template>
  <Transition name="page" mode="out-in">
    <component :is="current" :key="route.fullPath" />
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()
const current = shallowRef(resolveComponent('NuxtPage'))

watch(() => route.fullPath, async () => {
  await nextTick()
  current.value = resolveComponent('NuxtPage')
})
</script>
<script lang="ts" setup>

</script>

<style>

</style>