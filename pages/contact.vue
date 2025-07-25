<template>
  <div>

    <Head>
      <title>Contact | Lucas Ferreira – Développeur web freelance à Amiens</title>
      <meta name="description"
        content="Un projet web ? Contacte Lucas Ferreira, développeur freelance spécialisé Laravel, Vue.js, Nuxt et Tailwind. Réponse sous 24h, devis clair, collaboration efficace." />

      <!-- Open Graph -->
      <meta property="og:title" content="Contact | Lucas Ferreira – Développeur web freelance à Amiens" />
      <meta property="og:description"
        content="Tu as un projet web ? Échangeons ensemble. Réponse rapide, approche claire et adaptée à tes besoins." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lucasferreira.fr/contact" />
      <meta property="og:image" content="https://lucasferreira.fr/og_lucas_ferreira_developpeur_web.png" />

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Lucas Ferreira – Développeur web freelance à Amiens" />
      <meta name="twitter:description"
        content="Discutons de ton projet web. Développement PHP, Laravel, Vue.js, Tailwind. Contact rapide et sérieux." />
      <meta name="twitter:image" content="https://lucasferreira.fr/og_lucas_ferreira_developpeur_web.png" />
    </Head>

    <section :key="$route.fullPath">
      <ContactHero />
      <ContactForm />
      <ContactInfos />
      <FaqAccordion />
    </section>
  </div>
</template>


<script setup lang="ts">
</script>

<style></style>