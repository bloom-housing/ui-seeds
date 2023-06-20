import React from "react"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Message.scss"

const Message = (props: CommonMessageProps) => {
  const classNames = ["seeds-message"]
  if (props.className) classNames.push(props.className)

  return <CommonMessage {...props} className={classNames.join(" ")} />
}

export default Message
