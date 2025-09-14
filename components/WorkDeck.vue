<template>
  <section ref="deck" class="relative min-h-[65vh] md:min-h-[100vh]">
    <!-- Titre desktop -->
    <h2 class="hidden md:block w-full text-center text-primary text-6xl font-extrabold z-30 animate-title-curve-normal">
      Mes projets
    </h2>
    <h2
      class="md:hidden w-full text-center text-primary text-3xl font-extrabold z-30 animate-title-curve-normal mt-6 px-4 py-2">
      Swipe et découvre !
    </h2>



    <!-- Indications mobile -->
    <div
      class="md:hidden absolute top-1/3 left-0 right-0 z-[9998] flex justify-between items-center px-4 pointer-events-none">
      <!-- gauche -->
      <div class="flex flex-col items-center animate-swipe-float-left text-xs text-[#ffde34] opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 91 113.75" style="enable-background:new 0 0 91 91;" xml:space="preserve"><g><path fill="#ffde34" d="M75.6,68.7c0,0,0,0.1,0,0.1c0,0,0,4.2-2.6,5.7c-0.3,0.2-3,1.9-3.3,4.7l-0.2,3.4c0,0.9,0.7,1.7,1.6,1.8c0,0,0.1,0,0.1,0   c0.9,0,1.6-0.7,1.7-1.6l0.1-3.3c0.1-0.8,1.1-1.7,1.6-2c4-2.3,4.2-7.8,4.2-8.6l1.1-17.7c0,0,0-0.1,0-0.1v-3.3c0-3.4-2.7-6.1-6.1-6.1   c-1.1,0-2.1,0.3-3,0.8c-0.8-2.4-3.1-4.2-5.8-4.2c-1.5,0-2.8,0.5-3.9,1.4c-1.1-1.5-2.9-2.5-4.9-2.5c-1,0-1.9,0.2-2.7,0.6v-8.1   c3.3-2.1,5.4-5.8,5.4-9.7c0-6.4-5.2-11.6-11.6-11.6S36,13.6,36,20c0,4,2.1,7.6,5.4,9.8l-0.6,25.1c0,0,0,0,0,0.1l-5.4-10.4   c0-0.1-0.1-0.1-0.1-0.2c-1-1.4-3.7-3.7-7.5-2c-3.2,1.4-3,4.8-2.5,6.3c0.6,1.9,6,18.5,7.4,21c0.2,0.3,0.4,0.7,0.5,1   c1.4,2.7,3.4,6.5,9.5,8.3c1.8,0.5,1.8,1.4,1.8,1.5c0,0.1,0,0.2,0,0.3V83c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-2.1   c0.2-1.4-0.5-4.1-4.2-5.2c-4.7-1.4-6.2-4.2-7.5-6.6c-0.2-0.4-0.4-0.7-0.6-1.1c-0.9-1.7-4.9-13.4-7.1-20.4c0-0.1-0.5-1.7,0.7-2.2   c1.8-0.8,2.9,0.3,3.2,0.7l5.4,10.4c0,0,0,0.1,0.1,0.1c0.2,0.3,1,1.5,2.3,1.8c-0.2,0.5-0.5,0.8-0.8,0.9c-0.9,0.3-1.3,1.3-1,2.2   c0.3,0.7,0.9,1.1,1.6,1.1c0.2,0,0.4,0,0.6-0.1c3.6-1.3,3.6-6.4,3.6-8.1c0,0,0,0,0,0L45,21.2c0-1.5,1.2-2.7,2.7-2.7   c1.5,0,2.7,1.2,2.7,2.7v22v1.5c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-1.5c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7v1.1v0.4   v1.1c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-1.1v-0.4c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v3.4v0.6v1c0,0.9,0.8,1.7,1.7,1.7   s1.7-0.8,1.7-1.7v-1v-0.6c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7V51L75.6,68.7z M47.7,15.2c-3.4,0-6.1,2.7-6.1,6l-0.1,4.3   C40.2,24,39.4,22,39.4,20c0-4.5,3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2c0,2-0.7,3.9-2,5.3v-4.1C53.8,17.9,51,15.2,47.7,15.2z"/><path fill="#ffde34" d="M17.8,26.4c0.3,0.4,0.8,0.5,1.2,0.5c0.4,0,0.8-0.1,1.1-0.4c0.7-0.6,0.7-1.7,0.1-2.4l-2.5-2.7h14c0.9,0,1.7-0.8,1.7-1.7   s-0.8-1.7-1.7-1.7h-14l2.8-2.6c0.7-0.6,0.7-1.7,0.1-2.4c-0.6-0.7-1.7-0.7-2.4-0.1l-5.7,5.3c-0.3,0.3-0.5,0.7-0.5,1.2   c0,0.4,0.1,0.9,0.4,1.2L17.8,26.4z"/></g></svg>
        <span class="mt-1">J'aime pas 👎</span>
      </div>

      <!-- droite -->
      <div class="flex flex-col items-center animate-swipe-float-right text-xs text-[#e31b23] opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 91 113.75" style="enable-background:new 0 0 91 91;" xml:space="preserve"><g><path fill="#e31b23" d="M75.8,68.7c0,0,0,0.1,0,0.1c0,0,0,4.2-2.6,5.7c-0.3,0.2-3,1.9-3.3,4.7l-0.2,3.4c0,0.9,0.7,1.7,1.6,1.8c0,0,0.1,0,0.1,0   c0.9,0,1.6-0.7,1.7-1.6l0.1-3.3c0.1-0.8,1.1-1.7,1.6-2c4-2.3,4.2-7.8,4.2-8.6l1.1-17.7c0,0,0-0.1,0-0.1v-3.3c0-3.4-2.7-6.1-6.1-6.1   c-1.1,0-2.1,0.3-3,0.8c-0.8-2.4-3.1-4.2-5.8-4.2c-1.5,0-2.8,0.5-3.9,1.4c-1.1-1.5-2.9-2.5-4.9-2.5c-1,0-1.9,0.2-2.7,0.6v-8.1   c3.3-2.1,5.4-5.8,5.4-9.7c0-6.4-5.2-11.6-11.6-11.6S36.2,13.6,36.2,20c0,4,2.1,7.6,5.4,9.8L41,54.8c0,0,0,0,0,0.1l-5.4-10.4   c0-0.1-0.1-0.1-0.1-0.2c-1-1.4-3.7-3.7-7.5-2c-3.2,1.4-3,4.8-2.5,6.3c0.6,1.9,6,18.5,7.4,21c0.2,0.3,0.4,0.7,0.5,1   c1.4,2.7,3.4,6.5,9.5,8.3c1.8,0.5,1.8,1.4,1.8,1.5c0,0.1,0,0.2,0,0.3V83c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-2.1   c0.2-1.4-0.5-4.1-4.2-5.2c-4.7-1.4-6.2-4.2-7.5-6.6c-0.2-0.4-0.4-0.7-0.6-1.1c-0.9-1.7-4.9-13.4-7.1-20.4c-0.1-0.3-0.5-1.7,0.6-2.2   c1.8-0.8,2.9,0.3,3.2,0.7L38,56.5c0,0,0,0.1,0.1,0.1c0.2,0.3,1,1.5,2.3,1.8c-0.2,0.5-0.5,0.8-0.8,0.9c-0.9,0.3-1.3,1.3-1,2.2   c0.3,0.7,0.9,1.1,1.6,1.1c0.2,0,0.4,0,0.6-0.1c3.6-1.3,3.6-6.4,3.6-8.1c0,0,0,0,0,0l0.8-33.2c0-1.5,1.2-2.7,2.7-2.7   s2.7,1.2,2.7,2.7v22v1.5c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-1.5c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7v1.1v0.4v1.1   c0,0.9,0.8,1.7,1.7,1.7s1.7-0.8,1.7-1.7v-1.1v-0.4c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7v3.4v0.6v1c0,0.9,0.8,1.7,1.7,1.7   s1.7-0.8,1.7-1.7v-1v-0.6c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7V51L75.8,68.7z M47.9,15.2c-3.4,0-6.1,2.7-6.1,6l-0.1,4.3   C40.3,24,39.5,22,39.5,20c0-4.5,3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2c0,2-0.7,3.9-2,5.3v-4.1C53.9,17.9,51.2,15.2,47.9,15.2z"/><path fill="#e31b23"  d="M12.2,19.7c0,0.9,0.8,1.7,1.7,1.7h14l-2.5,2.7c-0.6,0.7-0.6,1.8,0.1,2.4c0.3,0.3,0.7,0.4,1.1,0.4c0.5,0,0.9-0.2,1.2-0.5   l5.3-5.7c0.3-0.3,0.5-0.8,0.4-1.2c0-0.4-0.2-0.9-0.5-1.2L27.4,13c-0.7-0.6-1.8-0.6-2.4,0.1c-0.6,0.7-0.6,1.8,0.1,2.4l2.8,2.6h-14   C13,18.1,12.2,18.8,12.2,19.7z"/></g></svg>
        <span class="mt-1">J’aime ❤️</span>
      </div>
    </div>
    <DeckCard v-for="(p, i) in projects" :key="p.id" ref="cardRefs" :img="p.img" :title="p.title" :link="p.link"
      :description="p.description" :tags="p.tags" :style="`--i:${i}`" :class="i % 2 ? 'dir-r' : 'dir-l'" />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Draggable, Flip)

const projects = [
  {
    id: 1,
    title: 'Mon Portfolio',
    img: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80',
    link: '/projects/1',
    description: 'Un portfolio minimaliste avec Nuxt 3, GSAP et animations 3D.',
    tags: ['Nuxt 3', 'GSAP', 'Tailwind']
  },
  {
    id: 2,
    title: 'App Courses',
    img: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80',
    link: '/projects/2',
    description: 'Une appli pour générer ta liste de courses à partir de plats.',
    tags: ['Laravel', 'Vue 3', 'PWA']
  },
  {
    id: 3,
    title: 'Système BAT',
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80',
    link: '/projects/3',
    description: 'Validation en ligne de BAT avec liens sécurisés, historique et alertes.',
    tags: ['PHP', 'Firebase', 'Sécurité']
  }
]

const deck = ref<HTMLElement>()
const cardRefs = ref<any[]>([])

onMounted(() => {
  const isMobile = window.innerWidth < 768
  const cards = [...deck.value!.querySelectorAll<HTMLElement>('.deck-card')]

  if (!isMobile) {
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

    return
  }

  cards.forEach((card, i) => {
    gsap.set(card, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50,
      zIndex: cards.length - i
    })

    Draggable.create(card, {
      type: 'x',
      inertia: true,
      onDragEnd() {
        const vm = cardRefs.value[i]

        if (Math.abs(this.x) > window.innerWidth * 0.25) {
          const direction = this.x > 0 ? 'right' : 'left'
          console.log('explode called!', direction)
          vm.explode?.(direction)

          gsap.to(card, {
            x: this.x > 0 ? '100vw' : '-100vw',
            rotation: this.x > 0 ? 15 : -15,
            opacity: 0,
            duration: 0.5,
            onComplete: () => card.remove()
          })
        } else {
          gsap.to(card, {
            x: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      }
    })

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

@keyframes float-left {

  0%,
  100% {
    transform: translateY(-4px) rotate(-10deg);
  }

  50% {
    transform: translateY(4px) rotate(-15deg);
  }
}

@keyframes float-right {

  0%,
  100% {
    transform: translateY(-4px) rotate(10deg);
  }

  50% {
    transform: translateY(4px) rotate(15deg);
  }
}

.animate-swipe-float-left {
  animation: float-left 2.2s ease-in-out infinite;
}

.animate-swipe-float-right {
  animation: float-right 2.2s ease-in-out infinite;
}

</style>
