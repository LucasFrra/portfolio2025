<template>
    <header class="sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto flex items-center justify-between px-10 py-3 font-semibold gap-10">
        <div class="flex items-center gap-6">
          <NuxtLink to="/">
            <img src="/logo-placeholder.svg" class="h-14" alt="Logo Lucas Ferreira" />
          </NuxtLink>

          <div
            class="hidden md:flex items-center gap-2 text-2xl text-primary transition hover:underline hover:opacity-90">
            <a href="mailto:contact@lucasferreira.fr">contact@lucasferreira.fr</a>
          </div>
        </div>
        <button
          v-show="!open"
          ref="triggerBtn"
          class=" flex flex-col gap-[6px] transition-all relative"
          @click="toggle"
          :aria-expanded="open"
          aria-haspopup="dialog"
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>
    </header>

    <Teleport to="body">
      <Transition name="slide">
        <div v-show="open"
          id="mobile-menu"
          ref="menuPanel"
          class="fixed inset-0 z-[80] bg-primary text-white flex flex-col items-start justify-center px-6 pt-20 pb-10 gap-3 text-start font-bold uppercase"
          role="dialog"
          aria-modal="true"
          :aria-hidden="!open"
          tabindex="-1"
          @keydown.esc.prevent="toggle"
        >

          <button
            ref="closeBtn"
            @click="toggle"
            class="absolute top-5 right-6 z-[90] flex flex-col gap-[6px]"
            :aria-expanded="open"
            aria-label="Fermer le menu"
            aria-controls="mobile-menu"
          >
            <span :class="['bar', open && 'top-x']"></span>
            <span :class="['bar', open && 'mid-x']"></span>
            <span :class="['bar', open && 'bot-x']"></span>
          </button>

          <NuxtLink to="/" @click="toggle" class="absolute top-6 left-6">
            <img src="/logo-placeholder-base-white.svg" class="h-12" alt="Logo Lucas Ferreira" />
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
import { ref, watch, nextTick } from 'vue'
const currentPath = ref('')
const open = ref(false)
const routePages = ['/about', '/work', '/contact']
const triggerBtn = ref<HTMLButtonElement | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)
const menuPanel = ref<HTMLElement | null>(null)

const links = [
  { label: 'À PROPOS', to: '/about' },
  { label: 'PROJETS', to: '/work' },
  { label: 'CONTACT', to: '/contact' },
]
const toggle = () => (open.value = !open.value)
watch(open, (v) => {
  document.documentElement.classList.toggle('overflow-hidden', v)
  document.documentElement.classList.toggle('nav-open', v)
  document.body.classList.toggle('overflow-hidden', v)

  if (v) {
    currentPath.value = window.location.pathname
    nextTick(() => {
      // Focus close button or panel for accessibility
      (closeBtn.value ?? menuPanel.value)?.focus()
    })
  } else {
    nextTick(() => triggerBtn.value?.focus())
  }
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

