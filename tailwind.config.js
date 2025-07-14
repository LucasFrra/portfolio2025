/** @type {import('tailwindcss').Config} */
export default {
  content:['app.vue','components/**/*.{vue,js,ts}','pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

