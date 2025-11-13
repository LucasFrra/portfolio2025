// plugins/gsap.client.ts
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Flip from 'gsap/Flip'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, Flip)

  return {
    provide: {
      gsap
    }
  }
})
