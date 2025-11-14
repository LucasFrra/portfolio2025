<template>
  <Transition name="fade">
    <div 
      v-if="visible"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      <div class="circle-mask"></div>
      <h1 class="circle-title">Lucas Ferreira</h1>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const hasLoaded = useCookie("lf_loaded", { default: () => "0" })
const visible = ref(hasLoaded.value !== "1")

onMounted(() => {
  nextTick(() => {
    if (!visible.value) return
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      visible.value = false
      hasLoaded.value = "1"
      document.body.classList.remove("overflow-hidden")
      document.documentElement.classList.add("no-loading")
    }, 1800)
  })
})
</script>

<style scoped>
.circle-mask {
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 9999px;
  background: #22c55e;
  animation: circleOpen 1.1s forwards ease-out;
}

@keyframes circleOpen {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 2000px;
    height: 2000px;
    opacity: 0.1;
  }
}

.circle-title {
  position: relative;
  color: white;
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0;
  animation: titleAppear .8s forwards .6s ease-out;
}

@keyframes titleAppear {
  0% { opacity: 0; transform: scale(.94); filter: blur(8px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
}

/* fade */
.fade-enter-active,
.fade-leave-active { transition: opacity .4s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
