import React, { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Toast.scss"
import useTimeout from "../hooks/useTimeout"
import usePortal from "../hooks/usePortal"

export interface ToastProps extends Omit<CommonMessageProps, "role" | "closeable"> {
  hideTimeout?: number
}

const Toast = (props: ToastProps) => {
  const classNames = ["seeds-toast"]
  if (props.className) classNames.push(props.className)

  const [toastStack, toastRef, mount, setMount] = usePortal("seeds-toast-stack", () => setMount(false))

  useTimeout(() => {
    setMount(false)
  }, props.hideTimeout)

  return mount && toastStack.current
    ? createPortal(
        <CommonMessage
          {...props}
          ref={toastRef}
          tabIndex={0}
          role="alert"
          closeable
          className={classNames.join(" ")}
        />,
        toastStack.current
      )
    : null
}

export default Toast
