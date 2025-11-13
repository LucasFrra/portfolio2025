<template>
  <div>

    <Head>
      <title>Contact | Lucas Ferreira – Développeur web</title>
      <meta name="description"
        content="Un projet web ? Une idée à creuser ? Contacte Lucas Ferreira, développeur full stack basé à Amiens, à l’écoute d’opportunités pro." />

      <!-- Open Graph -->
      <meta property="og:title" content="Contact | Lucas Ferreira – Développeur web" />
      <meta property="og:description"
        content="Tu veux échanger autour d’un projet ou d’une collaboration ? Je suis disponible et à l’écoute, que ton besoin soit clair ou encore en réflexion." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lucasferreira.fr/contact" />
      <meta property="og:image" content="https://lucasferreira.fr/og_lucas_ferreira_developpeur_web.png" />

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact | Lucas Ferreira – Développeur web" />
      <meta name="twitter:description"
        content="Contacte-moi pour parler projet, mission, ou opportunité. Réponse rapide et échanges simples." />
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