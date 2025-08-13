<template>
    <div class="animated-mesh pointer-events-none" :class="{ 'with-vignette': vignette }" :style="styleVars"
        aria-hidden="true">
        <div class="layer base"></div>
        <div class="layer aurora aurora-1"></div>
        <div class="layer aurora aurora-2"></div>
        <div class="layer aurora aurora-3"></div>
        <div v-if="pattern !== 'none'" class="layer pattern" :data-pattern="pattern"></div>
        <div class="layer noise"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    colors?: string[]
    opacity?: number
    speed?: number
    blend?: 'normal' | 'screen' | 'multiply' | 'overlay' | 'soft-light'
    vignette?: boolean
    pattern?: 'none' | 'dots' | 'grid' | 'brackets'
    patternOpacity?: number
    patternSize?: number
    patternBlend?: 'multiply' | 'soft-light' | 'overlay' | 'normal'
}>(), {
    colors: () => ['#22c55e', '#22d3ee', '#a855f7'],
    opacity: 0.28,
    speed: 32,
    blend: 'soft-light',
    vignette: false,
    pattern: 'brackets',
    patternOpacity: 0.03,
    patternSize: 28,
    patternBlend: 'soft-light'
})

const styleVars = computed(() => ({
    '--c1': props.colors[0],
    '--c2': props.colors[1],
    '--c3': props.colors[2],
    '--alpha': String(props.opacity),
    '--speed': `${props.speed}s`,
    '--blend': props.blend,
    '--palpha': String(props.patternOpacity),
    '--psize': `${props.patternSize}px`,
    '--pblend': props.patternBlend
}))
</script>

<style scoped>
/* --- layout --- */
.animated-mesh {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: transparent;
}

.layer {
    position: absolute;
    inset: -10%;
}

/* --- base wash --- */
.base {
    background:
        radial-gradient(1200px 700px at 12% -12%, color-mix(in oklab, var(--c1) 14%, transparent) 0%, transparent 70%),
        radial-gradient(1000px 600px at 92% -6%, color-mix(in oklab, var(--c2) 12%, transparent) 0%, transparent 68%),
        radial-gradient(900px 600px at 46% 118%, color-mix(in oklab, var(--c3) 10%, transparent) 0%, transparent 70%);
    filter: saturate(106%);
    -webkit-mask: radial-gradient(145% 130% at 50% 50%, #000 52%, transparent 82%);
    mask: radial-gradient(145% 130% at 50% 50%, #000 52%, transparent 82%);
}

/* --- auroras --- */
.aurora {
    filter: blur(60px);
    opacity: calc(var(--alpha, .28) * .35);
    mix-blend-mode: var(--blend, soft-light);
}

.aurora-1 {
    background: radial-gradient(45% 38% at 10% 14%, var(--c1) 0%, transparent 60%);
    animation: float1 var(--speed, 30s) linear infinite alternate;
}

.aurora-2 {
    background: radial-gradient(40% 35% at 90% 8%, var(--c2) 0%, transparent 60%);
    animation: float2 var(--speed, 30s) linear infinite alternate;
}

.aurora-3 {
    background: radial-gradient(38% 34% at 28% 112%, var(--c3) 0%, transparent 60%);
    animation: float3 var(--speed, 30s) linear infinite alternate;
}

/* --- dev patterns --- */
.pattern {
    opacity: var(--palpha, .03);
    mix-blend-mode: var(--pblend, soft-light);
}

/* dots */
.pattern[data-pattern="dots"] {
    background:
        radial-gradient(circle at 1px 1px, rgba(0, 0, 0, .5) 1px, transparent 1.6px) 0 0/var(--psize) var(--psize);
}

/* grid */
.pattern[data-pattern="grid"] {
    background:
        linear-gradient(to right, rgba(0, 0, 0, .45) 1px, transparent 1px) 0 0/var(--psize) var(--psize),
        linear-gradient(to bottom, rgba(0, 0, 0, .45) 1px, transparent 1px) 0 0/var(--psize) var(--psize);
}

/* brackets (lighter SVG) */
.pattern[data-pattern="brackets"] {
    background-image: url("data:image/svg+xml;utf8,\
  <svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'>\
    <g fill='rgba(0,0,0,0.55)' font-family='monospace' font-size='16' opacity='0.85' transform='rotate(-12 120 120)'>\
      <text x='22'  y='36'>&lt;/&gt;</text>\
      <text x='158' y='64'>{ }</text>\
      <text x='60'  y='124'>&lt;div&gt;</text>\
      <text x='112' y='176'>&amp;&amp;</text>\
      <text x='84'  y='206'>;</text>\
      <text x='14'  y='164'>[]</text>\
      <text x='178' y='144'>&lt; / &gt;</text>\
    </g>\
  </svg>");
    background-size: 240px 240px;
    background-repeat: repeat;
}

/* --- grain --- */
.noise {
    pointer-events: none;
    opacity: .04;
    mix-blend-mode: soft-light;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.45'/></svg>");
    background-size: 180px 180px;
}

/* --- motion --- */
@keyframes float1 {
    0% {
        transform: translate(-10%, -8%) scale(1);
    }

    100% {
        transform: translate(2%, 6%) scale(1.04);
    }
}

@keyframes float2 {
    0% {
        transform: translate(6%, -6%) scale(1.04);
    }

    100% {
        transform: translate(-4%, 4%) scale(1.01);
    }
}

@keyframes float3 {
    0% {
        transform: translate(-4%, 10%) scale(1);
    }

    100% {
        transform: translate(6%, -6%) scale(1.03);
    }
}

@media (prefers-reduced-motion: reduce) {

    .aurora-1,
    .aurora-2,
    .aurora-3 {
        animation: none;
    }
}
</style>