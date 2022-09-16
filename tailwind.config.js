module.exports = {
     mode: 'jit',
     content: [
          './resources/**/*.jsx',
          './src/**/*.{js,jsx,ts,tsx,vue}',
          './resources/views/**/*.blade.php',
     ],
     darkMode: 'class', // or 'media' or 'class'
     theme: {
          extend: {},
     },
     variants: {
          extend: {},
     },
     plugins: [
          require('@tailwindcss/typography'),
          require('@tailwindcss/forms'),
     ],
}
