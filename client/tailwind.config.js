/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  postcss: {
    plugins: [
      require('postcss-nesting'),
      require('autoprefixer'),
      // Add any other PostCSS plugins you want to use
    ],
  },
};
