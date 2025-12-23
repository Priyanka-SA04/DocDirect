/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // All your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5F6FFF", // example from your screenshot
        // You can define more brand colors here
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}
