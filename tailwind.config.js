/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        grey0: "#eae6e0",
        grey1: "#d3ceca",
        grey2: "#c7c3bf",
        grey3: "#bab7b2",
        grey4: "#7f7d7a",
        grey5: "#605e5c",
        grey6: "#1d1b1b",
        orange: "#ffc160"
      },
      fontFamily: {
        lores: "LoRes",
        microgramma: "Microgramma"
      },
      keyframes: {
        "speakerpulse": {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        "speakerpulse": 'speakerpulse 1s ease infinite'
      }
    },
  },
  plugins: [],
}

