/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050a15',
        cardBg: '#0a1020',
        primaryBlue: '#3b82f6',
        textLight: '#e2e8f0',
        textMuted: '#94a3b8'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
