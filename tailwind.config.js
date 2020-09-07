module.exports = {
  purge: [],
  theme: {

    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      fontSize: {
        '7xl': '7rem',
        '8xl': '8rem',
        '9xl': '9em',
        '10xl': '10rem',

      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
         300:'#1a1a1b'
        }
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      }
    },
  },
  variants: {
     animation: ["motion-safe"]
  },
  plugins: [],
}
