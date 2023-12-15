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
        orange: "#ffb448",
        red: "#ff5b4a",
        lightred: "#f1a19e",
        darkred: "#7a2037"
      },
      fontFamily: {
        lores: "LoRes",
        microgramma: "Microgramma",
        arialrounded: "ArialRounded"
      },
      keyframes: {
        "speakerpulse": {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.05)' },
        },
        "marquee": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        "marquee2": {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        "speakerpulse": 'speakerpulse 1s ease infinite',
        "marquee": 'marquee 15s linear infinite',
        "marquee2": 'marquee2 15s linear infinite'
      }
    },
  },
  plugins: [],
}

