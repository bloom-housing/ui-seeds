// .storybook/preview.js
import "../src/global/app-css.scss"
import "../documentation/storybook.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Tokens", "Actions", "Forms"],
    },
  },
}
