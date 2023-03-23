import React from "react"
import { Story } from "@storybook/react"

import Message from "../Message"
import Icon from "../../icons/Icon"
import { faClock } from "@fortawesome/free-regular-svg-icons"

import MDXDocs from "./Message.docs.mdx"

export default {
  title: "Blocks/Message",
  component: Message,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const status = () => (
  <>
    <Message id="status-message" variant="primary-inverse" customIcon={<Icon icon={faClock} />}>
      Application Due Date
    </Message>

    <style>
      {`
      #status-message {
        --message-icon-size: 1.25em;
      }
      `}
    </style>
  </>
)
