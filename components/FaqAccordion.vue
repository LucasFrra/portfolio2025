<template>
  <section class="max-w-4xl mx-auto px-6 py-16 rounded-3xl shadow-sm">
    <h2
      class="w-full text-center text-primary font-extrabold z-30 animate-title-curve-normal text-5xl md:text-6xl mt-6 md:mt-0 px-4 md:px-0 mb-16"
    >
      Questions fréquentes
    </h2>

    <ul class="space-y-4">
      <li
        v-for="(item, index) in faq"
        :key="index"
        class="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm"
      >
        <button
          @click="toggle(index)"
          class="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-medium text-zinc-800 hover:bg-zinc-50 transition"
        >
          <span>{{ item.question }}</span>
          <svg
            :class="openIndex === index ? 'rotate-180' : ''"
            class="w-4 h-4 text-zinc-400 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <transition name="fade">
          <div
            v-if="openIndex === index"
            class="px-6 pb-5 text-sm text-zinc-600 leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </transition>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const faq = [
  {
    question: "Pourquoi tu cherches un CDI ?",
    answer:
      "Je veux rejoindre une équipe sur le long terme pour continuer à progresser, partager mes compétences et contribuer à des projets ambitieux.",
  },
  {
    question: "Tu préfères travailler en remote ou sur site ?",
    answer:
      "J'aime le télétravail pour la concentration, mais je reste ouvert à venir sur place pour l'intégration et les moments importants.",
  },
  {
    question: "Qu’est-ce qui te passionne dans ton métier ?",
    answer:
      "La création. Voir une idée devenir une application utilisée, c’est ce qui me motive. J’aime aussi les technos modernes et le clean code.",
  },
  {
    question: "Ton style de travail en équipe ?",
    answer:
      "Communicatif, autonome, mais j’aime échanger souvent avec mes collègues pour avancer dans la même direction.",
  },
  {
    question: "Un projet dont tu es fier ?",
    answer:
      "Ce portfolio animé avec Nuxt et GSAP, vitrine de mon style et de ma vision du code.",
  },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
