import React from "react"
import { ClockIcon } from "@heroicons/react/24/outline"
import Icon from "../../icons/Icon"
import Message from "../Message"
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

export const Standard = () => (
  <>
    <Message id="status-message" variant="primary-inverse">
      Helpful message
    </Message>
  </>
)

export const CustomIcon = () => (
  // import { Icon } from "@bloom-housing/ui-seeds"
  //import { ClockIcon } from "@heroicons/react/24/outline"
  <Message
    id="status-message"
    variant="primary-inverse"
    customIcon={
      <Icon size="md" outlined>
        <ClockIcon />
      </Icon>
    }
  >
    Application Due Date
  </Message>
)

const DocsWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>{props.children}</div>
}

export const StandardVariants = () => (
  <DocsWrapper>
    <Message variant="primary">Primary Message</Message>
    <Message variant="success">Success Message</Message>
    <Message variant="warn">Warning Message</Message>
    <Message variant="alert">Alert Message</Message>
    <Message variant="secondary">Secondary Message</Message>
  </DocsWrapper>
)

export const InverseVariants = () => (
  <DocsWrapper>
    <Message variant="primary-inverse">Primary Message</Message>
    <Message variant="success-inverse">Success Message</Message>
    <Message variant="warn-inverse">Warning Message</Message>
    <Message variant="alert-inverse">Alert Message</Message>
    <Message variant="secondary-inverse">Secondary Message</Message>
  </DocsWrapper>
)
