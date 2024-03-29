/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          '0%': { transform: `translateX(-100%)` },
          '100%': { transform: `translateX(100%)` }
        },
      },
    },
  },
  variants:{},
  plugins: [],
};
