import "../src/global/app-css.scss"
import "../documentation/storybook.css"

export const parameters = {
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
export const tags = ["autodocs"]
