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
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
