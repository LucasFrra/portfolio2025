<template>
  <div>

    <Head>
      <title>Mes Finances | Application de gestion de budget</title>
      <meta name="description"
        content="Application web intuitive et sécurisée pour suivre ses revenus, dépenses et mieux gérer son budget personnel. Projet démonstratif développé en React et TypeScript." />

      <!-- Open Graph -->
      <meta property="og:title" content="Mes Finances | Application de gestion de budget" />
      <meta property="og:description"
        content="Projet démonstratif : application web intuitive pour gérer ses finances. Développement full stack en React, TypeScript, GraphQL." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://lucasferreira.fr/projects/mesfinances" />
      <meta property="og:image" content="https://lucasferreira.fr/og_lucas_ferreira_developpeur_web.png" />

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mes Finances | Application de gestion de budget" />
      <meta name="twitter:description"
        content="Suivi des dépenses et revenus, catégorisation, statistiques. Développée en React, TypeScript et GraphQL." />
      <meta name="twitter:image" content="https://lucasferreira.fr/og_lucas_ferreira_developpeur_web.png" />
    </Head>

    <section class="text-black">
      <header class="text-center py-16">
        <p class="uppercase text-sm font-semibold tracking-widest">Mes finances — 2025</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-[#333333] mt-2">Application de gestion de budget</h1>
        <div class="w-16 h-1 bg-[#333333] rounded-full mx-auto"></div>
      </header>

      <div class="max-w-6xl mx-auto px-6">
        <img src="/projects/mesfinances/gestion-budget-2.webp" alt="Mes Finances hero image"
          class="rounded-xl w-full mb-16 border-4 border-[#333333]" />
      </div>

      <section class="max-w-6xl mx-auto px-6 mb-20 flex flex-col md:flex-row gap-8">
        <div class="flex-1 grid grid-cols-1 gap-8">
          <div>
            <h3 class="font-black uppercase text-3xl opacity-60">Projet:</h3>
            <p class="font-semibold text-2xl">Application web pour suivre et gérer ses finances personnelles</p>
          </div>
          <div>
            <h3 class="font-black uppercase text-3xl opacity-60">Objectif:</h3>
            <p class="font-semibold text-2xl">Créer une application web intuitive et sécurisée pour aider les
              utilisateurs à gérer leur budget efficacement.</p>
          </div>
          <div>
            <h3 class="font-black uppercase text-3xl opacity-60">Pour:</h3>
            <p class="font-semibold text-2xl">Projet fictif, développé pour démontrer mes compétences en React et
              TypeScript</p>
          </div>
        </div>
        <div class="flex-1 flex items-center">
          <p class="text-5xl font-bold text-[#333333] leading-snug">
            Conception d'une application web intuitive et sécurisée pour aider les utilisateurs à gérer leur budget
            efficacement.
          </p>
        </div>
      </section>
    </section>
  </div>
</template>
