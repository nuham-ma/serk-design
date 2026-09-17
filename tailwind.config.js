/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        serk: {
          bg: '#08221D',          // Deepest logo forest green
          dark: '#051815',        // Surface dark green
          card: '#0D2F28',        // Card container green
          cardHover: '#123D34',   // Card hover green
          border: '#1A4D42',      // Border green
          gold: '#E5B876',        // Primary logo warm sand gold
          goldLight: '#F7D6A3',   // Light gold for highlights
          goldPale: '#FDF3E5',    // Pale cream for body text
          goldDark: '#B28744',    // Deep bronze gold
          terracotta: '#A84C2F',  // Accent terracotta from photoshoot
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', '"Noto Sans Ethiopic"', '"Abyssinica SIL"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Ethiopic"', 'sans-serif'],
        ethiopic: ['"Noto Sans Ethiopic"', '"Abyssinica SIL"', 'sans-serif'],
      },
      backgroundImage: {
        'serk-gradient': 'linear-gradient(180deg, #08221D 0%, #051815 100%)',
        'serk-gold-gradient': 'linear-gradient(135deg, #F8D39E 0%, #E5B876 50%, #B88B46 100%)',
      }
    },
  },
  plugins: [],
}
