/** @type {import('tailwindcss').Config} */
export default {
  content:['app.vue','components/**/*.{vue,js,ts}','pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      colors: {
        primary: '#22c55e',
        'primary-mid': 'rgba(34, 197, 94, 0.75)',
        'primary-back': 'rgba(34, 197, 94, 0.5)',
        'bg-primary': 'rgba(34, 197, 94, 0.1)',
      },
      scale: {
            '-100': '-1',
        },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': theme('colors.primary'),
        },
      })
    }
  ],
}

