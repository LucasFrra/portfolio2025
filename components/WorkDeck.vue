<template>
  <section ref="deck" class="h-screen relative">
    <DeckCard v-for="(p, i) in projects" :key="p.id" :img="p.img" :title="p.title" :link="p.link" :description="p.description" :tags="p.tags" :style="`--i:${i}`"
      :class="i % 2 ? 'dir-r' : 'dir-l'" />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
const { $gsap } = useNuxtApp()

const projects = [
  {
    id: 1,
    title: "Mon Portfolio",
    img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80",
    link: "/projects/1",
    description: "Un portfolio minimaliste avec Nuxt 3, GSAP et animations 3D.",
    tags: ["Nuxt 3", "GSAP", "Tailwind"]
  },
  {
    id: 2,
    title: "App Courses",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80",
    link: "/projects/2",
    description: "Une appli pour générer ta liste de courses à partir de plats.",
    tags: ["Laravel", "Vue 3", "PWA"]
  },
  {
    id: 3,
    title: "Système BAT",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80",
    link: "/projects/3",
    description: "Validation en ligne de BAT avec liens sécurisés, historique et alertes.",
    tags: ["PHP", "Firebase", "Sécurité"]
  }
]

const deck = ref<HTMLElement>()
onMounted(() => {
  const cards = deck.value!.querySelectorAll<HTMLElement>('.deck-card')
  cards.forEach((c, i) => {
    $gsap.set(c, { rotate: (Math.random() * 6 - 3), zIndex: projects.length - i })
  })
  $gsap.to(cards, {
    x: (i: number) => (i % 2 ? '120vw' : '-120vw'),
    rotate: (i: number) => (i % 2 ? 15 : -15),
    stagger: { each: 0.12 },
    scrollTrigger: {
      trigger: deck.value,
      start: 'top top',
      end: '+=150%',
      scrub: true,
      pin: true,
    }
  })
})
</script>

<style scoped>
.dir-l {
  transform-origin: 80% 80%;
}

.dir-r {
  transform-origin: 20% 80%;
}
</style>