<template>
  <section class="text-black">
    <header class="text-center py-16">
      <p class="uppercase text-sm font-semibold tracking-widest">Portfolio — 2025</p>
      <h1 class="text-5xl md:text-7xl font-extrabold text-red-600 mt-2">MON PORTFOLIO</h1>
      <div class="w-16 h-1 bg-red-600 rounded-full mx-auto"></div>
    </header>
    
    <div class="max-w-6xl mx-auto px-6">
      <img
        src="/projects/mon-portfolio/portfolio-presentation.webp"
        alt="Projet hero"
        class="rounded-xl w-full mb-16"
      />
    </div>

    <section class="max-w-6xl mx-auto px-6 mb-20 flex flex-col md:flex-row gap-8">
      <div class="flex-1 grid grid-cols-1 gap-8">
        <div>
          <h3 class="font-black uppercase text-3xl opacity-60">Projet:</h3>
          <p class="font-semibold text-2xl">Portfolio</p>
        </div>
        <div>
          <h3 class="font-black uppercase text-3xl opacity-60">Objectif:</h3>
          <p class="font-semibold text-2xl">Montrer mes capacités et mon identité</p>
        </div>
        <div>
          <h3 class="font-black uppercase text-3xl opacity-60">Pour:</h3>
          <p class="font-semibold text-2xl">Internet</p>
        </div>
      </div>
      <div class="flex-1 flex items-center">
        <p class="text-5xl font-bold text-red-600 leading-snug">
          Portfolio personnel construit avec Nuxt, GSAP et Tailwind.
          Une vitrine technique et créative qui reflète mon approche du développement web.
        </p>
      </div>
    </section>

    <div class="bg-red-600 py-12 mb-20">
      <div class="max-w-6xl mx-auto px-6">
      <img
        src="/projects/mon-portfolio/portfolio-presentation-video.gif"
        alt="Aperçu animé du projet"
        class="rounded-xl w-full"
      />
      </div>
    </div>
  </section>
</template>
