<template>
  <section ref="hero" class="flex flex-col items-center overflow-hidden h-screen justify-center"
    style="perspective:900px; transform-style:preserve-3d;">
    <div class="title-container relative inline-block">
      <h1 ref="titleEl" class="title relative text-center leading-none font-extrabold"
        style="transform-style:preserve-3d; font-size:24vmin; letter-spacing:-0.07em;">
        <div class="words flex flex-col items-center leading-none">
          <div class="text-3dLayer web">
            <span class="layer back">WEB</span>
            <span class="layer mid">WEB</span>
            <span class="layer front">WEB</span>
          </div>
          <div class="text-3dLayer web">
            <span class="layer back">DEVELOPER</span>
            <span class="layer mid">DEVELOPER</span>
            <span class="layer front">DEVELOPER</span>
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

  const sprites = hero.value!.querySelectorAll<HTMLElement>('.sprite')
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
      sprites.forEach((el, i) =>
        gsap.to(el, {
          x: -pctX * spriteShift * (0.4 + i * .1),
          y: -pctY * spriteShift * (0.4 + i * .1),
          rotate: -pctX * tiltRange * (0.3 + i * .1),
          duration: .6,
          ease: 'power2.out'
        })
      )
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
.sprite {
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
}

.title-container {
  font-family: 'Anton', sans-serif;
}

.words {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

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

.text-bg {
  position: absolute;
  top: calc(50% - .5em);
  left: 0;
  width: 100%;
  height: 1em;
  background: radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 70%);
  filter: blur(30px);
  z-index: 0;
  pointer-events: none;
}

.web {
  display: inline-grid;
  grid-template: 'layer';
}

.text-3dLayer {
  font-size: clamp(6rem, 28vmin, 18rem);
  white-space: nowrap;
  overflow: visible;
  text-align: center;
  display: grid;
  grid-template: 'layer';
  transform: scaleY(1.1) scaleX(0.9);
  font-weight: 400;
  letter-spacing: -0.04em;
}

.layer {
  grid-area: layer;
}

.back {
  transform: translate(6px, 6px);
  color: rgba(34, 197, 94, 0.5);
  z-index: 2;
}

.mid {
  transform: translate(3px, 3px);
  color: rgba(34, 197, 94, 0.75);
  z-index: 3;
}

.front {
  transform: translate(0, 0);
  color: #fff;
  -webkit-text-stroke: 1px #22c55e;
  z-index: 4;
}
</style>
