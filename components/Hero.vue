<template>
  <section ref="hero" class="flex flex-col items-center py-12 overflow-hidden"
    style="perspective:900px; transform-style:preserve-3d;">
    <div class="relative inline-block font-anton">
      <h1 ref="titleEl" class="relative text-center leading-none font-extrabold"
        style="transform-style:preserve-3d; font-size:24vmin; letter-spacing:-0.07em;">
        <div class="relative flex flex-col items-center overflow-hidden">
          <div
            class="relative grid [grid-template:'layer'] scale-y-[1.1] scale-x-[0.9] font-normal tracking-[-0.04em] whitespace-nowrap">
            <span class="layer [grid-area:layer] translate-x-[6px] translate-y-[6px] text-primary-back">WEB</span>
            <span class="layer [grid-area:layer] translate-x-[3px] translate-y-[3px] text-primary-mid">WEB</span>
            <span class="layer [grid-area:layer] text-white z-[4] text-stroke text-stroke-primary">WEB</span>
          </div>
          <div
            class="relative grid [grid-template:'layer'] scale-y-[1.1] scale-x-[0.9] font-normal tracking-[-0.04em] whitespace-nowrap mt-2">
            <span
              class="layer [grid-area:layer] translate-x-[6px] translate-y-[6px] text-green-500/50 z-[2]">DEVELOPER</span>
            <span
              class="layer [grid-area:layer] translate-x-[3px] translate-y-[3px] text-green-500/75 z-[3]">DEVELOPER</span>
            <span class="layer [grid-area:layer] text-white z-[4] text-stroke text-stroke-primary">DEVELOPER</span>
          </div>
        </div>
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const hero = ref<HTMLElement>()
const titleEl = ref<HTMLElement>()

onMounted(() => {
  const title = titleEl.value!

  const layers = title.querySelectorAll<HTMLElement>('.layer')
  const tiltRange = 4
  const spriteShift = 15
  const layerShift = 6
  const layerDepth = [-1, 0, 1]
  let raf: number | null = null
  window.addEventListener('pointermove', e => {
    if (raf) cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      const pctX = (e.clientX / window.innerWidth - 0.5) * 2
      const pctY = (e.clientY / window.innerHeight - 0.5) * 2
      gsap.to(title, {
        rotateX: pctY * tiltRange,
        rotateY: pctX * tiltRange,
        transformPerspective: 1000,
        duration: .4,
        ease: 'power2.out'
      })
      layers.forEach((el, i) =>
        gsap.to(el, {
          x: -pctX * layerShift * layerDepth[i % 3],
          y: -pctY * layerShift * layerDepth[i % 3],
          duration: .4,
          ease: 'power2.out'
        })
      )
    })
  })
})
</script>

<style scoped>
.words::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60%;
  height: 40%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2), transparent 70%);
  z-index: 0;
  filter: blur(60px);
  pointer-events: none;
}
</style>
