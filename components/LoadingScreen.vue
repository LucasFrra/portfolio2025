<template>
  <transition name="fade">
    <div v-if="visible" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      <h1 class="text-5xl font-extrabold tracking-widest animate-pulse">LUCAS</h1>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 1500) // durée de ton splash (1.5s ici)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
