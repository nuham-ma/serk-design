/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E5C98B',
          DEFAULT: '#C5A059',
          metallic: '#D4AF37',
          dark: '#9A7730',
        },
        onyx: {
          DEFAULT: '#121214',
          dark: '#0B0C0E',
          surface: '#1A1C22',
          border: '#2A2D37',
        },
        silk: {
          DEFAULT: '#FAF8F5',
          warm: '#F4EFE6',
          muted: '#EAE3D5',
        },
        crimson: {
          DEFAULT: '#88222A',
          deep: '#63151C',
        },
        emeraldSilk: {
          DEFAULT: '#163832',
          deep: '#0F2622',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        ethiopic: ['"Noto Sans Ethiopic"', '"Abyssinica SIL"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #F5DF88 50%, #B38628 100%)',
      }
    },
  },
  plugins: [],
}
