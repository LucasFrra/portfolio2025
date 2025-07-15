// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link:[
        { rel:'preconnect', href:'https://fonts.gstatic.com', crossorigin:'' },
        { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' },
        { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Anton&display=swap' },
      ]
    }
  },
})
