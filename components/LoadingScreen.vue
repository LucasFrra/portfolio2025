<template>
  <Transition name="fade">
    <div v-if="visible" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      <h1 class="text-5xl font-extrabold tracking-widest animate-pulse">LUCAS</h1>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Use a cookie so SSR can read it and avoid flicker (no deprecated checks)
const hasLoadedCookie = useCookie<string>('lf_hasLoadedOnce', {
  default: () => '0',
  sameSite: 'lax'
})

// Compute visibility synchronously (works both on SSR and client)
const visible = ref(hasLoadedCookie.value !== '1')

onMounted(() => {
  if (visible.value) {
    // Prevent background scroll while the overlay is visible
    document.body.classList.add('overflow-hidden')
    setTimeout(() => {
      visible.value = false
      document.body.classList.remove('overflow-hidden')
      hasLoadedCookie.value = '1'
    }, 1500)
  }
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
