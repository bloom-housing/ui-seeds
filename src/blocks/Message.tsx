import React from "react"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Message.scss"

interface MessageProps extends Omit<CommonMessageProps, "role"> {}

const Message = (props: MessageProps) => {
  const classNames = ["message"]
  if (props.className) classNames.push(props.className)

  return <CommonMessage {...props} role="region" className={classNames.join(" ")} />
}

export default Message
