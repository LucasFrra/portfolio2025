/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
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
        keyframes: {
        'curve-bounce-normal': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-6px) rotate(-1deg) scale(1.02)' },
          '50%': { transform: 'translateY(4px) rotate(1deg) scale(0.98)' },
          '75%': { transform: 'translateY(-2px) rotate(-0.5deg) scale(1.01)' },
        },
      },
      animation: {
        'title-curve-normal': 'curve-bounce-normal 3.5s ease-in-out infinite',
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
        }
      })
    }
  ],
}

