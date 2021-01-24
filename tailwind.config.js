module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        firaSans: ['Fire Sans', 'sans-serif'],
        yuseiMagic: ['Yusei Magic', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
