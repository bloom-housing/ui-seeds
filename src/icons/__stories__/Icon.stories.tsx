import React from "react"
import { Story } from "@storybook/react"

import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

import Icon from "../Icon"

import MDXDocs from "./Icon.docs.mdx"
import { CommonIconProps } from "../CommonIconProps"

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
          undefined: "Default (undefined)",
        },
      },
    },
  },
}

const Template: Story<CommonIconProps> = ({ size }) => (
  <>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faHouseChimney} size={size} /> house-chimney
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faEnvelope} size={size} /> envelope
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faDoorOpen} size={size} /> door-open
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faPhone} size={size} /> phone
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faCircleUser} size={size} /> circle-user
    </div>
  </>
)

export const icons: Story<CommonIconProps> = Template.bind({})
// es-ignore-next-line
icons.args = {
  size: undefined,
}

export const containerBasedSizes = () => (
  <>
    <div style={{ fontSize: "var(--bloom-font-size-sm)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-lg)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-2xl)" }}>
      <Icon icon={faDoorOpen} /> door-open
    </div>
  </>
)

export const presetSizes = () => (
  <>
    <div>
      <Icon icon={faHouseChimney} size={"utility-sm"} /> house-chimney (utility-sm)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"utility-md"} /> house-chimney (utility-md)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"badge-lg"} /> house-chimney (badge-lg)
    </div>
    <div>
      <Icon icon={faHouseChimney} size={"badge-xl"} /> house-chimney (badge-xl)
    </div>
  </>
)
