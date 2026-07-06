// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Ensure this is the correct import
    require('autoprefixer'),          // Ensure autoprefixer is installed
  ],
};

