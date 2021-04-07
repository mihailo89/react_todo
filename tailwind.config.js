module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          200: '#4A5568'
        },
        green: {
          500: '#38B2AC',
          700: '#2C7A7B',
        },
        orange : {
          400: '#F6AD55',
          600: '#DD6B20',
        },
        gray: {
          900: '#111827'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
