/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'paars': '#685c93',
      'purple-light-2': '#F2F2FF',
    },
    extend: {
      fontFamily: {
        'prettywise-black': ['var(--font-prettywise-black)'],
        'prettywise-bold': ['var(--font-prettywise-bold)'],
        'aventra': ['var(--font-aventra)'],
        'objectivity': ['var(--font-objectivity)'],
        display: ['var(--font-display)'],
        signature: ['var(--font-signature)'],
        petale: ['var(--font-petale)'],
      },
    },
  },
  plugins: [],
}

