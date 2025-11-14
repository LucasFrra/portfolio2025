<template>
  <section ref="deck" class="relative min-h-[65vh] md:min-h-[100vh]">
    <!-- Titre -->
    <h2 class="w-full text-center text-primary font-extrabold z-30 animate-title-curve-normal text-5xl md:text-6xl mt-6 md:mt-0 px-4 md:px-0 mb-16">
      Mes projets
    </h2>

    <!-- Cartes -->
    <DeckCard
      v-for="(p, i) in projects"
      :key="p.id"
      ref="cardRefs"
      :img="p.img"
      :title="p.title"
      :link="p.link"
      :description="p.description"
      :tags="p.tags"
      :style="`--i:${i}`"
      :class="i % 2 ? 'dir-r' : 'dir-l'"
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const { $gsap } = useNuxtApp()

const projects = [
  {
    id: 1,
    title: 'Plateforme de gestion de fichier 3D',
    img: '/projects/sawar/plateforme-fichiers-3d-thumbnail.webp',
    link: '/projects/sawar',
    description: 'Une plateforme pour gérer et visualiser des fichiers 3D.',
    tags: ['Laravel', 'Firebase', 'Bootstrap']
  },
  {
    id: 2,
    title: 'Site vitrine',
    img: '/projects/pizza-luna/site-vitrine-pizza-luna-thumbnail.webp',
    link: '/projects/pizza-luna',
    description: 'Site vitrine pour une pizzeria locale, optimisé pour le SEO.',
    tags: ['Wordpress', 'PHP', 'SEO']
  },
  {
    id: 3,
    title: 'Application de gestion de budget',
    img: '/projects/mesfinances/gestion-budget-thumbnail.webp',
    link: '/projects/mesfinances',
    description: 'Application web pour suivre et gérer ses finances personnelles.',
    tags: ['React', 'TypeScript', 'GraphQL']
  }
]

const deck = ref<HTMLElement>()
const cardRefs = ref<any[]>([])

onMounted(() => {
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches
  if (!isDesktop) return

  const cards = [...deck.value!.querySelectorAll<HTMLElement>('.deck-card')]

  const bottomCard = cards.pop()!
  $gsap.set(bottomCard, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
    rotate: 0,
    zIndex: 1
  })

  $gsap.set(cards, {
    rotate: () => Math.random() * 6 - 3,
    zIndex: (i: number) => cards.length - i + 1
  })

  const endDistance = '+=' + cards.length * 30 + '%'

  $gsap.to(cards, {
    x: (i: number) => (i % 2 ? '100vw' : '-100vw'),
    rotate: (i: number) => (i % 2 ? 15 : -15),
    stagger: { each: 0.12 },
    scrollTrigger: {
      trigger: deck.value,
      start: 'top top',
      end: endDistance,
      scrub: true,
      pin: true
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
