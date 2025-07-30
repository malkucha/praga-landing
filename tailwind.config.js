/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada para Praga
        'praga': {
          'beige': '#f9f4ef',      // Fondo principal
          'beige-dark': '#f0e6d6',  // Beige más oscuro
          'gold': '#9e8f7e',       // Dorado suave
          'gold-light': '#b5a394', // Dorado claro
          'rose': '#d4b9a6',       // Rosa empolvado
          'rose-light': '#e6d0c1', // Rosa más claro
          'gray': '#3e3e3e',       // Gris oscuro para texto
          'gray-light': '#8a8a8a', // Gris claro
          'white': '#ffffff',      // Blanco puro
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
