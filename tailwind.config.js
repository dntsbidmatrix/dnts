/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070D1E',
          navy: '#0C1733',
          card: '#122045',
          border: '#1E3260',
          blue: '#1E6BFF',
          cyan: '#00E5FF',
          accent: '#FF4D6D',
          amber: '#FFAA00'
        },
        forest: {
          deep: '#1B2921',
          dark: '#24362C',
          brunswick: '#344E41',
          hunter: '#3A5A40',
          fern: '#588157',
          shamrock: '#5A9F68',
          pistachio: '#BBD58E',
          sage: '#EAF2E8',
          sageLight: '#F3F7F3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
