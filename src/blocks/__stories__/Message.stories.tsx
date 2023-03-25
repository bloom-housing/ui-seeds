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

export const standardVariants = () => (
  <div style={{ display: "grid", gap: "var(--bloom-s3)" }}>
    <Message variant="primary">Primary Message</Message>
    <Message variant="success">Success Message</Message>
    <Message variant="warn">Warning Message</Message>
    <Message variant="alert">Alert Message</Message>
    <Message variant="secondary">Secondary Message</Message>
  </div>
)

export const inverseVariants = () => (
  <div style={{ display: "grid", gap: "var(--bloom-s3)" }}>
    <Message variant="primary-inverse">Primary Message</Message>
    <Message variant="success-inverse">Success Message</Message>
    <Message variant="warn-inverse">Warning Message</Message>
    <Message variant="alert-inverse">Alert Message</Message>
    <Message variant="secondary-inverse">Secondary Message</Message>
  </div>
)
