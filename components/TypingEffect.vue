<template>
  <section>
    <div class="mt-6 h-[3rem] sm:h-[4rem] text-center text-primary text-xl sm:text-2xl">
      <span>{{ currentText }}</span><span class="inline-block animate-blink">|</span>
      <p v-if="isEasterEgg" class="text-xs sm:text-sm text-yellow-400 mt-1">Tu as trouvé la phrase cachée ! (0.1%)</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const phrases = [
  { text: 'Je conçois des interfaces simples et efficaces', rare: false },
  { text: 'Je développe des solutions sur-mesure', rare: false },
  { text: 'Je structure, je développe, je livre', rare: false },
  { text: 'Je m’adapte à chaque client, chaque projet', rare: false },
  { text: 'Je t’aide à aller droit au but avec ton site', rare: false },
  { text: 'Je développe des projets utiles et durables', rare: false },
  { text: 'Je crée des expériences utilisateur mémorables', rare: false },
  { text: 'Je construis des sites web qui font la différence', rare: false },
  { text: 'Si ce texte s’affiche, tu gagnes… mon respect', rare: true },
  { text: 'Pas peur de déployer un vendredi… enfin presque', rare: true }
]

const rareProbability = 0.001 // 0.1%

const currentText = ref('')
const isEasterEgg = ref(false)

let phraseIndex = 0
let lastPhraseIndex = -1
let charIndex = 0
let isDeleting = false
let holdTime = 1000

function pickNextPhrase() {
  const isRareRoll = Math.random() < rareProbability
  let pool = isRareRoll
    ? phrases.filter(p => p.rare)
    : phrases.filter(p => !p.rare)

  if (pool.length === 0) pool = phrases

  let nextIndex = -1
  do {
    nextIndex = Math.floor(Math.random() * pool.length)
  } while (nextIndex === lastPhraseIndex)

  const chosen = pool[nextIndex]
  phraseIndex = phrases.indexOf(chosen)
  lastPhraseIndex = phraseIndex

  isEasterEgg.value = chosen.rare
  holdTime = isEasterEgg.value ? 180000 : 1000
}


function type() {
  const currentPhrase = phrases[phraseIndex].text

  if (isDeleting) {
    currentText.value = currentPhrase.substring(0, charIndex--)
  } else {
    currentText.value = currentPhrase.substring(0, charIndex++)
  }

  if (!isDeleting && charIndex === currentPhrase.length + 1) {
    isDeleting = true
    setTimeout(type, holdTime)
    return
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false
    pickNextPhrase()
  }

  setTimeout(type, isDeleting ? 40 : 80)
}

onMounted(() => {
  pickNextPhrase()
  type()
})
</script>

<style scoped>
@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>