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
        'handtekening': ['var(--font-handtekening)'],
        display: ['var(--font-display)'],
        signature: ['var(--font-signature)'],
        petale: ['var(--font-petale)'],
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '50%': { transform: 'scale(1)', opacity: 0.3 },
          '100%': { transform: 'scale(1.2)', opacity: 0 }
        }
      },
      animation: {
        'ripple': 'ripple 2s infinite',
        'ripple-delayed': 'ripple 2s infinite 1s',
      }
    },
  },
  plugins: [],
}

