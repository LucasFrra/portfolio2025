<template>
  <section>
    <footer class="text-[#000] py-6 px-8 lg:px-20 grid grid-cols-12 gap-y-8">
      <div class="col-span-12 flex flex-wrap lg:justify-between justify-start items-baseline gap-x-4 gap-y-2 text-left">
        <h2 class="font-extrabold whitespace-nowrap leading-none text-[#22c55e] text-left"
          style="font-size:clamp(2.5rem,10vw,10rem);">
          LUCAS&nbsp;FERREIRA
        </h2>
      </div>

      <div class="col-span-12 lg:col-span-6 space-y-4 lg:space-y-10 text-left">
        <div>
          <h3 class="font-black uppercase text-2xl">Disponibilités</h3>
          <p class="-mt-1 text-lg">Lundi&nbsp;–&nbsp;Vendredi</p>
        </div>

        <div>
          <h3 class="font-black uppercase text-2xl">Réseaux sociaux</h3>
          <ul class="flex gap-4 pt-1">
            <li v-for="s in socials" :key="s.name">
              <a :href="s.url" class="underline hover:no-underline" target="_blank" rel="noopener">{{ s.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="col-span-12 lg:col-span-6 lg:flex lg:flex-col lg:items-end space-y-4 lg:space-y-10 text-left lg:text-right">
        <div class="space-y-2 lg:space-y-4">
          <h3 class="font-black uppercase text-2xl">Me contacter ?</h3>
          <a href="mailto:contact@lucasferreira.fr"
            class="inline-flex items-center gap-2 text-lg underline hover:no-underline">
            ➜ contact@lucasferreira.fr
          </a>
        </div>

        <p class="text-sm font-semibold opacity-60">© {{ currentYear }} Lucas Ferreira</p>
      </div>
    </footer>
  </section>
</template>



<script setup lang="ts">
const currentYear = new Date().getFullYear()
const socials = [
  { name: 'GitHub', url: 'https://github.com/LucasFrra' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/lucas-ferreira0511' },
]
</script>