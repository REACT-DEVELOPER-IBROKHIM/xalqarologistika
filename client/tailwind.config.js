/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sign: "url('/src/assets/images/signs.png')",
        wave: "url('https://t3.ftcdn.net/jpg/03/20/14/98/360_F_320149880_YIsJEzdfICARIZtTPsTnhx2YHjpiQhop.jpg')",
      },
    },
  },
  plugins: [],
};
