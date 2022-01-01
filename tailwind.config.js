module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,scss}',
    './pages/*.{js,ts,jsx,tsx,scss}',
    './src/components/**/*.{js,ts,jsx,tsx,scss}',
    './src/components/*.{js,ts,jsx,tsx,scss}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
