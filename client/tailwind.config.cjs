/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.jsx',
    './src/main.jsx',
    './index.html',
    './src/components/BusinessPage.jsx',
    './src/components/Footer.jsx',
    './src/components/Header.jsx',
    './src/components/HomeScreen.jsx',
    './src/components/Login.jsx',
    './src/components/busPageContents/RightColumn.jsx',
    './src/components/busPageContents/LeftColumn.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

//when adding a new component, put the link to it in this file 