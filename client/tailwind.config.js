/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sign: "url('/src/assets/images/signs.png')",
        wave: "url('/src/assets/images/wave.jpg')",
        silk: "url('/src/assets/images/silk-road.png')",
        silkBack: "url('/src/assets/images/silk-back.png')",
        pattern: "url('/src/assets/images/pattern.png')",
        ornate: "url('/src/assets/images/ornate.jpg')",
      },
    },
  },
  plugins: [],
};
