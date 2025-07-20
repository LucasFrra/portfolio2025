import type confetti from 'canvas-confetti'

declare module '#app' {
  interface NuxtApp {
    $confetti: typeof confetti
  }
}

export {}
