<template>
    <footer class="text-[#000] py-24 px-8 lg:px-20 grid
                 grid-cols-12 gap-y-16">
        <!-- HUGE name -->
         <!-- text en bold -->
        <h2 class="col-span-12 lg:col-span-7 font-extrabold whitespace-nowrap leading-none text-indigo-400"
            style="font-size:clamp(2.5rem,6vw,6rem);">
            LUCAS&nbsp;FERREIRA
        </h2>

        <!-- AVAILABILITY -->
        <p class="col-span-12 lg:col-span-5 lg:self-end lg:text-right
            font-black uppercase tracking-tight" style="font-size:clamp(1.1rem,2.2vw,2rem);">
            Available <span class="text-indigo-400">September&nbsp;2025</span>
        </p>

        <!-- Left info block -->
        <div class="col-span-12 lg:col-span-6 space-y-10">
            <div>
                <h3 class="font-black uppercase">Work Days</h3>
                <p class="-mt-1">Tuesday&nbsp;–&nbsp;Friday</p>
            </div>

            <div>
                <h3 class="font-black uppercase">Teaching</h3>
                <p class="-mt-1">Monday</p>
            </div>

            <div>
                <h3 class="font-black uppercase">Socials</h3>
                <ul class="flex gap-6 pt-1">
                    <li v-for="s in socials" :key="s.name">
                        <a :href="s.url" class="underline hover:no-underline" target="_blank" rel="noopener">{{ s.name
                            }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Right contact -->
        <div class="col-span-12 lg:col-span-6 lg:flex lg:flex-col
                lg:items-end space-y-10">
            <div class="space-y-4">
                <h3 class="font-black uppercase text-2xl">Have a project in mind?</h3>
                <a href="mailto:hello@lulu.dev" class="inline-flex items-center gap-2 text-lg underline
                  hover:no-underline">
                    ➜&nbsp;hello@lulu.dev
                </a>
            </div>

            <p class="text-sm font-semibold opacity-60">© 2025 Lucas Durand</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Fake socials – replace w/ yours
const socials = [
    { name: 'GitHub', url: 'https://github.com/yourHandle' },
    { name: 'Codepen', url: 'https://codepen.io/yourHandle' },
    { name: 'Instagram', url: 'https://instagram.com/yourHandle' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourHandle' },
]
</script>