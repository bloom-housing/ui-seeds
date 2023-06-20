module.exports = {
  plugins: {
    "@csstools/postcss-global-data": {
      files: [
        "src/global/tokens/screens.scss"
      ]
    },
    "postcss-custom-media": {},
    autoprefixer: {},
  },
}
