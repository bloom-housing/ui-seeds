import React from "react"
import { Story } from "@storybook/react"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import Icon from "../Icon"

import MDXDocs from "./Icon.docs.mdx"
import { CommonIconProps } from "icons/CommonIconProps"

export default {
  title: "Icons/Icon",
  component: Icon,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
  argTypes: {
    size: {
      options: [undefined, "utility-sm", "utility-md", "badge-lg", "badge-xl"],
      control: {
        labels: {
          undefined: "Default (undefined)"
        },
      },
    }
  },
}

const Template: Story<CommonIconProps> = ({ size }) => (
  <>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faCoffee} size={size} /> Coffee
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faStar} size={size} /> Star
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faUser} size={size} /> User
    </div>
  </>
)

export const icons: Story<CommonIconProps> = Template.bind({})
// es-ignore-next-line
icons.args = {
  size: undefined,
};

export const containerBasedSizes = () => (
  <>
    <div style={{ fontSize: "var(--bloom-font-size-sm)" }}>
      <Icon icon={faStar} /> Star
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-lg)" }}>
      <Icon icon={faStar} /> Star
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-2xl)" }}>
      <Icon icon={faStar} /> Star
    </div>
  </>
)

export const presetSizes = () => (
  <>
    <div>
      <Icon icon={faStar} size={"utility-sm"} /> Star (utility-sm)
    </div>
    <div>
      <Icon icon={faStar} size={"utility-md"} /> Star (utility-md)
    </div>
    <div>
      <Icon icon={faStar} size={"badge-lg"} /> Star (badge-lg)
    </div>
    <div>
      <Icon icon={faStar} size={"badge-xl"} /> Star (badge-xl)
    </div>
  </>
)
