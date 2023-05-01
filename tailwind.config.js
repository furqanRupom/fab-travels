/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Nunito-sans": " 'Nunito Sans', sans-serif",
        "nunito":"'nunito',sans-serif"
      },
    },
  },
  plugins: [],
};
