/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        praga: {
          beige: '#f9f4ef',
          gold: '#9e8f7e',
          dark: '#3e3e3e',
          accent: '#d4b9a6',
          white: '#ffffff',
        },
      },
      fontFamily: {
        title: ['Playfair Display', 'Lora', 'Poppins', 'serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
