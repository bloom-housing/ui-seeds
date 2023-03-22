import React, { useMemo } from "react"
import { createPortal } from "react-dom"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Toast.scss"

interface ToastProps extends Omit<CommonMessageProps, "role"> {}

const Toast = (props: ToastProps) => {
  const classNames = ["toast"]
  if (props.className) classNames.push(props.className)

  // return the toast stack element, or create it if needed
  const toastStack = useMemo(() => {
    let el = document.querySelector("#toast-stack")
    if (!el) {
      el = document.createElement("div")
      el.id = "toast-stack"
      document.body.append(el)
    }
    return el
  }, [document.body])

  return createPortal(
    <CommonMessage {...props} role="alert" closable className={classNames.join(" ")} />,
    toastStack
  )
}

export default Toast
