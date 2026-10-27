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
        sunset: {
          deep: '#431407',
          burnt: '#7C2D12',
          rust: '#9A3412',
          cinnamon: '#C2410C',
          orange: '#EA580C',
          vivid: '#F97316',
          amber: '#F59E0B',
          gold: '#FBBF24',
          yellow: '#FDE047',
          light: '#FEF3C7',
          cream: '#FFF7ED',
          soft: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
