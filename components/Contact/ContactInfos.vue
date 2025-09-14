<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <h2 class="w-full text-center text-primary font-extrabold z-30 animate-title-curve-normal text-5xl md:text-6xl mt-6 md:mt-0 px-4 md:px-0 mb-16">
      Informations pratiques
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(info, i) in infos"
        :key="i"
        class="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div class="flex items-center gap-3">
          <component :is="info.icon" class="w-5 h-5 text-primary shrink-0" />
          <h3 class="text-sm font-semibold text-zinc-800 uppercase tracking-wide">
            {{ info.title }}
          </h3>
        </div>

        <p class="text-sm text-zinc-600 leading-relaxed">
          {{ info.content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  MapPin,
  Calendar,
  FolderKanban,
  Wrench,
  MessageSquare,
  ShieldCheck,
} from 'lucide-vue-next'

const infos = [
  {
    title: 'Localisation',
    content: 'Je suis basé à Amiens (Hauts-de-France) et je travaille à distance avec des clients dans toute la France.',
    icon: MapPin,
  },
  {
    title: 'Disponibilité',
    content: 'Je suis disponible du lundi au vendredi et je réponds en général sous 24h.',
    icon: Calendar,
  },
  {
    title: 'Types de projets',
    content: 'Sites vitrines, plateformes sur-mesure, applications web, maintenance technique. Je m’adapte selon les besoins.',
    icon: FolderKanban,
  },
  {
    title: 'Compétences techniques',
    content: 'PHP, Laravel, Vue.js, Nuxt, Tailwind CSS, WordPress, Firestore, API... Je choisis les bons outils selon le projet.',
    icon: Wrench,
  },
  {
    title: 'Méthode de travail',
    content: 'On échange sur votre besoin, je vous propose une solution claire, puis on avance étape par étape jusqu’à la mise en ligne.',
    icon: MessageSquare,
  },
  {
    title: 'Engagements',
    content: 'Je travaille avec sérieux et transparence. Mon objectif : un projet solide, qui vous ressemble, livré dans de bonnes conditions.',
    icon: ShieldCheck,
  },
]
</script>
