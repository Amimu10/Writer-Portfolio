// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

// export default  withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#2C541D',  // Replace with your preferred primary color
//         secondary: '#000000',  // Replace with your secondary color
//         accent: '#858585',  // Replace with your accent color
//         neutral: '',  // Neutral tones for background or text
//         background: '#F9FAFB',  // Light background color
//       },
//       fontFamily: {
//         'inter': ['Inter', 'sans-serif'],  // You can replace 'Inter' with any font of your choice
//         'merriweather': ['Merriweather', 'serif'],
//         mono: ['Fira Code', 'monospace'],
//       },
//     },
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// })

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C541D',
        secondary: '#000000',
        neutral: '#858585', 
        background: '#F9FAFB',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
});
