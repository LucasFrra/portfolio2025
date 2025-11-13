<template>
  <section class="mb-6 md:mb-0 flex justify-center">
    <NuxtLink
      :to="link"
      class="deck-card group block relative md:absolute md:top-[6rem] md:left-1/2 md:-translate-x-1/2 w-[90%] md:w-[90vmin] sm:h-[55vmin] h-[60vmin] rounded-3xl overflow-hidden bg-green-900 shadow-xl transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        :src="img"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition duration-300"
      />
      <div
        class="relative z-10 p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white"
      >
        <h3 class="text-xl font-bold mb-1">{{ title }}</h3>
        <p class="text-sm opacity-80 line-clamp-2">{{ description }}</p>
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  title: string
  link: string
  description: string
  tags: string[]
}>()
</script>
