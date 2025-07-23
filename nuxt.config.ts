// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    server: {
      allowedHosts: ['bf7227032fc7.ngrok-free.app'],
    },
  },
})
