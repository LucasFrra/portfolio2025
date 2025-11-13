<template>
    <div class="min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-6xl font-bold mb-4 text-gray-900">Mes projets récents</h1>
            <p class="text-xl mb-12 text-gray-700">Découvrez mes projets récents</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                    <div>
                        <img :src="project.img" :alt="project.title" class="w-full h-48 object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gray-900">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ project.description }}</p>
                        <div class="mt-2 flex flex-wrap gap-2 mb-4">
                            <span v-for="tag in project.tags" :key="tag"
                                class="text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-gray-700">
                                {{ tag }}
                            </span>
                        </div>
                        <NuxtLink :to="project.link"
                            :class="`inline-block mt-4 px-6 py-2 border border-gray-900 text-gray-900 rounded-lg transition-all duration-300 ${project.hover}`">
                            Voir le projet →
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
const projects = [
    {
        id: 1,
        title: 'Plateforme de gestion de fichier 3D',
        img: '/projects/sawar/plateforme-fichiers-3d.webp',
        link: '/projects/sawar',
        description: 'Une plateforme pour gérer et visualiser des fichiers 3D.',
        tags: ['Laravel', 'Firebase', 'Bootstrap'],
        hover: 'hover:bg-[#BF0BDD] hover:border-white hover:text-white'
    },
    {
        id: 2,
        title: 'Site vitrine',
        img: '/projects/pizza-luna/site-vitrine-pizza-luna.webp',
        link: '/projects/pizza-luna',
        description: 'Site vitrine pour une pizzeria locale, optimisé pour le SEO.',
        tags: ['Wordpress', 'PHP', 'SEO'],
        hover: 'hover:bg-[#d9a647] hover:border-white hover:text-white'
    },
    {
        id: 3,
        title: 'Application de gestion de budget',
        img: '/projects/mesfinances/gestion-budget.webp',
        link: '/projects/mesfinances',
        description: 'Application web pour suivre et gérer ses finances personnelles.',
        tags: ['React', 'TypeScript', 'GraphQL'],
        hover: 'hover:bg-[#333333] hover:border-white hover:text-white'
    }
];
</script>

<style></style>