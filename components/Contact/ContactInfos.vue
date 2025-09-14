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
  Briefcase,
  Code2,
  GraduationCap,
  Rocket,
} from 'lucide-vue-next'

const infos = [
  {
    title: 'Localisation',
    content: "Basé à Amiens (Hauts-de-France). Ouvert aux postes en télétravail ou sur la région.",
    icon: MapPin,
  },
  {
    title: 'Disponibilité',
    content: "Actuellement disponible immédiatement pour un poste en CDI dans le développement web.",
    icon: Calendar,
  },
  {
    title: 'Expérience',
    content: "Plus de 3 ans d'expérience en alternance et projets variés, du site vitrine aux plateformes sur-mesure.",
    icon: Briefcase,
  },
  {
    title: 'Compétences techniques',
    content: "PHP, Laravel, Vue.js, Nuxt, Tailwind CSS, WordPress, MySQL, API. Solide expérience full-stack.",
    icon: Code2,
  },
  {
    title: 'Formation',
    content: "Diplômé d'un Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises).",
    icon: GraduationCap,
  },
  {
    title: 'Objectif',
    content: "Rejoindre une équipe dynamique pour concevoir des applications utiles, performantes et évolutives.",
    icon: Rocket,
  },
]
</script>