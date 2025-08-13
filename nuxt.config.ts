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
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Lucas Ferreira — Développeur Web',
      titleTemplate: '%s | Lucas Ferreira',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#22c55e' },
        { name: 'description', content: 'Portfolio de Lucas Ferreira, développeur web. Projets, contact et informations.' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:title', content: 'Lucas Ferreira — Développeur Web' },
        { property: 'og:description', content: 'Portfolio de Lucas Ferreira, développeur web. Projets, contact et informations.' },
        { property: 'og:image', content: '/og_lucas_ferreira_developpeur_web.png' },
        { property: 'og:url', content: 'https://lucasferreira.fr' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lucas Ferreira — Développeur Web' },
        { name: 'twitter:description', content: 'Portfolio de Lucas Ferreira, développeur web. Projets, contact et informations.' },
        { name: 'twitter:image', content: '/og_lucas_ferreira_developpeur_web.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  vite: {
    server: {
      allowedHosts: ['bf7227032fc7.ngrok-free.app'],
    },
  },
})
