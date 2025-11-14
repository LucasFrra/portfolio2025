// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-25',
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxtjs/sitemap'],
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://lucasferreira.fr',
    name: 'Lucas Ferreira — Développeur Web',
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
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
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
        { rel: 'preconnect', href: 'https://lucasferreira.fr', crossorigin: 'anonymous' },
        {
          rel: 'preload',
          href: '/fonts/Anton-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/BebasNeue-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
      ],
    },
  },
  vite: {
    server: {
      allowedHosts: ['localhost', 'lucasferreira.fr', 'www.lucasferreira.fr'],
    },
  },
})