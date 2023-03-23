import React from "react"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Alert.scss"

interface AlertProps extends Omit<CommonMessageProps, "role" | "closable"> {}

const Alert = (props: AlertProps) => {
  const classNames = ["alert"]
  if (props.className) classNames.push(props.className)

  return <CommonMessage {...props} role="alert" closable className={classNames.join(" ")} />
}

export default Alert
