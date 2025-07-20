<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 font-semibold">
      <NuxtLink to="/"><img src="/logo-placeholder.svg" class="h-12" /></NuxtLink>

      <ul class="hidden md:flex gap-10 uppercase text-sm">
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to" class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full
                   after:bg-primary after:scale-x-0 after:origin-left after:transition-transform
                   hover:after:scale-x-100 [&.router-link-active]:after:scale-x-100">
            {{ l.label }}
          </NuxtLink>
        </li>
      </ul>

      <button v-show="!open" class="md:hidden flex flex-col gap-[6px] transition-all relative" @click="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>

  <Teleport to="body">
    <Transition name="slide">
      <div v-show="open"
        class="fixed inset-0 z-[80] bg-primary text-white flex flex-col items-start justify-center px-6 pt-20 pb-10 gap-3 text-start font-bold uppercase">

        <button @click="toggle" class="absolute top-5 right-6 z-[90] flex flex-col gap-[6px]">
          <span :class="['bar', open && 'top-x']"></span>
          <span :class="['bar', open && 'mid-x']"></span>
          <span :class="['bar', open && 'bot-x']"></span>
        </button>

        <NuxtLink to="/" @click="toggle" class="absolute top-6 left-6">
          <img src="/logo-placeholder-base-white.svg" class="h-12" />
        </NuxtLink>

        <div class="flex flex-col gap-2 text-7xl leading-[0.9] w-full">
          <NuxtLink v-for="l in links" :key="l.to" :to="l.to" @click="toggle" :class="[
            routePages.includes(currentPath)
              ? (currentPath === l.to ? 'underline text-white' : 'text-white/50 hover:text-white')
              : 'text-white',
            'transition-colors'
          ]">
            {{ l.label }}
          </NuxtLink>
        </div>

        <div class="text-sm uppercase w-full">
          <hr class="border-t border-white mb-2" />
          <p class="opacity-70">Réseaux sociaux</p>
          <div class="flex flex-col gap-1 font-semibold text-white text-2xl leading-[0.9] mt-2">
            <a href="https://github.com/LucasFrra" target="_blank">Github</a>
            <a href="https://linkedin.com/in/lucas-ferreira0511 " target="_blank">LinkedIn</a><br>
            <a href="mailto:contact@lucasferreira.fr">➜ contact@lucasferreira.fr</a>
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>


</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const currentPath = ref('')
const open = ref(false)
const routePages = ['/about', '/work', '/contact']

const links = [
  { label: 'À PROPOS', to: '/about' },
  { label: 'PROJETS', to: '/work' },
  { label: 'CONTACT', to: '/contact' },
]
const toggle = () => (open.value = !open.value)
watch(open, (v) => {
  document.documentElement.classList.toggle('overflow-hidden', v)
  if (v) currentPath.value = window.location.pathname
})
</script>

<style scoped>
.bar {
  @apply w-8 h-[3px] rounded bg-primary transition-all duration-300 origin-center
}

.top-x {
  transform: translateY(9px) rotate(45deg);
  background: white
}

.mid-x {
  opacity: 0
}

.bot-x {
  transform: translateY(-9px) rotate(-45deg);
  background: white
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .35s ease, opacity .3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
