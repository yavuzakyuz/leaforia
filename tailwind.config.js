/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#1F2335',
        customBackground2: '#0F172A',
        leaforaMainText: '#A1CC9C',
        leaforaMainBtn: '#37531B',
        leaforaTextBright: '#C4D96F',
      }
    },
  },
  plugins: [],
}

