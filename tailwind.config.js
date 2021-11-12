module.exports = {
  mode:'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,scss}',
    './pages/*.{js,ts,jsx,tsx,scss}',
    './src/components/**/*.{js,ts,jsx,tsx,scss}',
    './src/components/*.{js,ts,jsx,tsx,scss}',
    './src/styles/**/*.{scss}',
    './src/styles/*.{scss}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
