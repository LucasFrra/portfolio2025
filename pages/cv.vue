<template>
  <div class="min-h-screen flex items-center justify-center text-xl">
    Redirection…
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.location.href = '/cv.pdf'
})
</script>
