/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '1rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        startPrim:'#11100D',
        lcPrim: '#1D0505',
        lcSec:'#FF2727',
        uiPrim:'#00071B',
        uiSec:'#0047FF',
        tePrim:'#110C03',
        tesec:'#ED9B37',
        papaPrim:'#1B0000',
        papasec:'#de3b7c',
        brattPrim:'#0B0B1F',
        brattsec:'#5A57FD',
        gainerPrim:'#0C0E0A',
        gainersec:'#BAFF75',
        footerPrim:'#0A1305',
        footerSec:"#7CCD54",
        footerhighlight:"#284619",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
