<template>
  <div class="flex justify-center px-4 py-20 bg-gradient-to-b from-white via-white to-zinc-100">
    <form
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }"
      action="https://formspree.io/f/mvgqkwqo"
      method="POST"
      class="w-full max-w-lg px-6 sm:px-8 py-10 bg-white/60 backdrop-blur-md border border-zinc-200 rounded-3xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)] space-y-6"
    >
      <h2 class="text-4xl font-black text-center text-primary tracking-tight">On bosse ensemble ?</h2>

      <div class="space-y-4">
        <input
          name="name"
          placeholder="Ton nom"
          required
          class="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary/60 bg-white text-sm placeholder-zinc-500 transition shadow-sm hover:shadow-md"
        />

        <input
          name="email"
          type="email"
          placeholder="Ton email"
          required
          class="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary/60 bg-white text-sm placeholder-zinc-500 transition shadow-sm hover:shadow-md"
        />

        <textarea
          name="msg"
          placeholder="Ton message"
          rows="5"
          required
          class="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary/60 bg-white text-sm placeholder-zinc-500 transition shadow-sm hover:shadow-md resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-wider transition hover:scale-105 hover:shadow-lg active:scale-95"
      >
        Envoyer ➜
      </button>
    </form>
  </div>
</template>
