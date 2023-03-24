import React, { useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"
import "../hooks/useTimeout"

import "./Toast.scss"
import useTimeout from "../hooks/useTimeout"
import useToggle from "../hooks/useToggle"

interface ToastProps extends Omit<CommonMessageProps, "role" | "closable"> {
  hideTimeout?: number
}

const Toast = (props: ToastProps) => {
  const [visible, toggler] = useToggle(true)
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

  useTimeout(() => {
    toggler()
  }, props.hideTimeout)

  return createPortal(
    visible && <CommonMessage {...props} role="alert" closable className={classNames.join(" ")} />,
    toastStack
  )
}

export default Toast
