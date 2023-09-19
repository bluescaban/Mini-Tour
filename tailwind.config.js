module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        mobile: '200px',
        tablet: '580px',
        desktop: '1200px',
        large: '1600px',
        xl: '1900px',
      },
      borderWidth: {
        '18': '18px',
      },
    },
  },
  variants: {},
  plugins: [],
};