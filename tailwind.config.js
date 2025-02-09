/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight reset
  },
  plugins: [], 
}