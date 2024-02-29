import React from "react"
import { Story } from "@storybook/react"

import Message from "../Message"
import Icon from "../../icons/Icon"
import { ClockIcon } from "@heroicons/react/24/outline"

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
    <Message id="status-message" variant="primary-inverse" customIcon={<Icon size="md" outlined><ClockIcon /></Icon>}>
      Application Due Date
    </Message>
  </>
)

export const standardVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Message variant="primary">Primary Message</Message>
    <Message variant="success">Success Message</Message>
    <Message variant="warn">Warning Message</Message>
    <Message variant="alert">Alert Message</Message>
    <Message variant="secondary">Secondary Message</Message>
  </div>
)

export const inverseVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Message variant="primary-inverse">Primary Message</Message>
    <Message variant="success-inverse">Success Message</Message>
    <Message variant="warn-inverse">Warning Message</Message>
    <Message variant="alert-inverse">Alert Message</Message>
    <Message variant="secondary-inverse">Secondary Message</Message>
  </div>
)
