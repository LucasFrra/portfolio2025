import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
export default defineNuxtPlugin(app => {
  app.provide('gsap', gsap)
})
