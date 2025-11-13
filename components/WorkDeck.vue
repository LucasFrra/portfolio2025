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
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

const projects = [
  {
    id: 1,
    title: 'Plateforme de gestion de fichier 3D',
    img: '/projects/sawar/plateforme-fichiers-3d.webp',
    link: '/projects/sawar',
    description: 'Une plateforme pour gérer et visualiser des fichiers 3D.',
    tags: ['Laravel', 'JS', 'Bootstrap']
  },
  {
    id: 2,
    title: 'App Courses',
    img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80',
    link: '/projects/app-courses',
    description: 'Une appli pour générer ta liste de courses à partir de plats.',
    tags: ['Laravel', 'Vue 3', 'PWA']
  },
  {
    id: 3,
    title: 'Système BAT',
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80',
    link: '/projects/systeme-bat',
    description: 'Validation en ligne de BAT avec liens sécurisés, historique et alertes.',
    tags: ['PHP', 'Firebase', 'Sécurité']
  }
]

const deck = ref<HTMLElement>()
const cardRefs = ref<any[]>([])

onMounted(() => {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches
  const isSmallScreen = window.innerWidth < 768
  const isMobile = isSmallScreen || isPortrait
  if (isMobile) return

  const cards = [...deck.value!.querySelectorAll<HTMLElement>('.deck-card')]

  const bottomCard = cards.pop()!
  gsap.set(bottomCard, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
    rotate: 0,
    zIndex: 1
  })

  gsap.set(cards, {
    rotate: () => Math.random() * 6 - 3,
    zIndex: (i: number) => cards.length - i + 1
  })

  const endDistance = '+=' + cards.length * 30 + '%'

  gsap.to(cards, {
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
