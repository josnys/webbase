module.exports = {
     mode: 'jit',
     purge: [
          './resources/**/*.js',
          './src/**/*.{js,jsx,ts,tsx,vue}',
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
