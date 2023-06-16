import React from "react"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Alert.scss"

interface AlertProps extends Omit<CommonMessageProps, "role" | "closeable"> {}

const Alert = (props: AlertProps) => {
  const classNames = ["seeds-alert"]
  if (props.className) classNames.push(props.className)

  return <CommonMessage {...props} role="alert" closeable className={classNames.join(" ")} />
}

export default Alert
