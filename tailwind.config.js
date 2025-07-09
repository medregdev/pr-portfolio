// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        primary: '#000957',
        secondary: '#FFEB00',
      },
      fontFamily: {
        sans: ['Roboto', 'Kantumruy Pro', 'sans-serif'], // this overrides Tailwind's default
        moul: ['Roboto', 'Moul', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  mode: 'jit', // Enable Just-In-Time mode for Tailwind CSS
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.stroke-text': {
          '--tw-text-opacity': '1',
          '-webkit-text-stroke-width': '1.4px',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-color': theme('colors.secondary'),
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': theme('colors.primary'),
        },
        '.dark .text-stroke-secondary': {
          '-webkit-text-stroke-color': theme('colors.secondary'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'dark'])
    },
  ],
}
