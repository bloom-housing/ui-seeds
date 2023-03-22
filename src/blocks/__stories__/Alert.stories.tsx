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
        "primary-inverse",
        "alert",
        "alert-inverse",
        "success",
        "success-inverse",
        "secondary",
        "secondary-inverse",
        "warn",
        "warn-inverse"
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

export const wideContainerLayout = () => (
  <>
    <Alert id="in-container" variant="alert" fullwidth>An alert that scales to full container width</Alert>
  
    <style>
      {`
      #in-container {
        --alert-max-width: var(--bloom-width-4xl);
      }
      `}
    </style>
  </>
)