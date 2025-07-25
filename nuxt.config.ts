// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-25',
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  app: {
  },
  vite: {
    server: {
      allowedHosts: ['bf7227032fc7.ngrok-free.app'],
    },
  },
})
