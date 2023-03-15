import React from "react"
import { Story } from "@storybook/react"

import Alert from "../Alert"
import Icon from "../../icons/Icon"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

//import MDXDocs from "./Alert.docs.mdx"

export default {
  title: "Blocks/Alert",
  component: Alert,
  // parameters: {
  //   docs: {
  //     page: MDXDocs,
  //   },
  // },
  argTypes: {
    variant: {
      options: [
        undefined,
        "primary",
        "primary-light",
        "alert",
        "alert-light",
        "success",
        "success-light",
        "secondary",
        "secondary-light",
        "warn",
        "warn-light"
      ],
      control: {
        labels: {
          undefined: "Default (undefined)",
        },
      },
    },
  },
}

const Template: Story = ({ variant }) => (
  <>
    <div style={{ fontSize: "1.5em" }}>
      <Alert variant={variant}>Alert message here</Alert>
    </div>
  </>
)

export const alert: Story = Template.bind({})
// es-ignore-next-line
alert.args = {
  variant: undefined,
}

export const withCustomIcon = () => (
  <Alert customIcon={<Icon icon={faHouseChimney} />}>An alert with a custom icon</Alert>
)
