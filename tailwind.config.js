/** @type {import('tailwindcss').Config} */
export default {
  // Diz ao Tailwind para procurar classes nestes arquivos
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // cores do PrimeBank
        prime: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        }
      }
    },
  },
  plugins: [],
}