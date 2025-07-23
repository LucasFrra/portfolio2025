<template>
  <section class="max-w-4xl mx-auto px-6 py-16">
    <h2 class="w-full text-center text-primary font-extrabold z-30 animate-title-curve-normal text-3xl md:text-6xl mt-6 md:mt-0 px-4 md:px-0 mb-16">
      Questions fréquentes
    </h2>

    <ul class="space-y-4">
      <li
        v-for="(item, index) in faq"
        :key="index"
        class="border border-zinc-200 rounded-xl overflow-hidden"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
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
    question: "Quels types de projets tu acceptes ?",
    answer:
      "Je travaille sur différents projets web : site vitrine, outils sur-mesure, refonte, maintenance... Si t’as un doute, le mieux c’est d’en discuter directement.",
  },
  {
    question: "Comment ça se passe si on veut bosser ensemble ?",
    answer:
      "On échange d’abord pour comprendre ton projet, puis je te propose une solution claire adaptée à ce que tu veux faire.",
  },
  {
    question: "Est-ce qu’on peut te contacter même si le projet n’est pas encore prêt ?",
    answer:
      "Bien sûr ! Tu peux me contacter même si ce n’est qu’une idée. On peut voir ensemble ce qui est faisable, et comment avancer.",
  },
  {
    question: "Tu es dispo après le projet ?",
    answer:
      "Oui. Je peux intervenir ponctuellement ou proposer un suivi selon les besoins.",
  },
  {
    question: "Et pour les tarifs ?",
    answer:
      "Chaque projet est différent, donc ça dépend du besoin. Le mieux, c’est de m’expliquer ce que tu veux faire, et je te dis ce que je peux proposer.",
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
