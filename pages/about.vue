<template>
    <section class="text-[#000]">
        <div class="pt-24 pb-10 px-6 text-center">
            <h1 class="font-extrabold text-primary leading-none" style="font-size:clamp(3rem,11vw,12rem);">
                LUCAS&nbsp;FERREIRA
            </h1>

            <p class="text-lg mt-2 text-black/60">
                Développeur web full stack
            </p>
        </div>

        <div class="max-w-4xl mx-auto px-6 mb-28 flex flex-col items-center">
            <img src="/lucas-ferreira.webp" alt="Lucas Ferreira Profile" class="w-full max-w-md rounded-lg shadow-xl object-cover 
                             hover:scale-[1.01] transition-all duration-500" />
        </div>
        <div class="max-w-7xl mx-auto px-6 mb-40">
            <div class="grid lg:grid-cols-12 gap-x-12 gap-y-20">

                <div class="lg:col-span-5">
                    <p class="font-bold text-primary leading-tight" style="font-size:clamp(1.5rem,3.5vw,2.5rem);">
                        Je développe des applications web robustes.
                    </p>
                </div>

                <div class="lg:col-span-7 space-y-6 text-xl text-black/70 leading-relaxed">
                    <p>
                        Passionné par le développement web, je crée des applications performantes et intuitives. Mon
                        objectif : transformer des idées complexes en solutions simples.
                    </p>
                    <p>
                        Avec une expertise front-end et back-end, je maîtrise les technologies modernes pour concevoir
                        des interfaces attrayantes et des architectures fiables.
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 mb-40">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                <div>
                    <div class="text-6xl font-black text-primary mb-4">01</div>
                    <h3 class="text-xl font-black mb-2">Adaptabilité</h3>
                    <p class="text-black/60">
                        Je m’adapte à chaque équipe et chaque projet pour garantir le succès commun.
                    </p>
                </div>

                <div>
                    <div class="text-6xl font-black text-primary mb-4">02</div>
                    <h3 class="text-xl font-black mb-2">Fiabilité</h3>
                    <p class="text-black/60">
                        Je livre des solutions robustes et maintenables, assurant une performance optimale.
                    </p>
                </div>

                <div>
                    <div class="text-6xl font-black text-primary mb-4">03</div>
                    <h3 class="text-xl font-black mb-2">Résolution</h3>
                    <p class="text-black/60">
                        J’aime résoudre des problèmes complexes avec des solutions innovantes et efficaces.
                    </p>
                </div>

                <div>
                    <div class="text-6xl font-black text-primary mb-4">04</div>
                    <h3 class="text-xl font-black mb-2">Passion</h3>
                    <p class="text-black/60">
                        Je suis passionné par la création de solutions web qui font une différence.
                    </p>
                </div>

            </div>
        </div>

        <ContactForm />

    </section>
</template>
