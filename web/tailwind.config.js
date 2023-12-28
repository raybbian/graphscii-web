/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sarala': ['Sarala', 'sans-serif'],
      },
      colors: {
        'sage-green': '#d7e4c2',
        'koi-red': '#fd2e5f',
        'cream': '#fffef4',
        'light-green': '#9db445',
        'teal': '#376f5c',
        'sakura-pink': '#eb80a8',
        'pastel-orange': '#fcdaba',
        'pastel-pink': '#ffe3ed',
      }
    },
    screens: {
      'mobile': {'max': '575px'},
      'tablet': {'max': '1151px'},
      'desktop': {'min': '1152px'}
    }
  },
  plugins: [],
}
