import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import CommonMessage, { CommonMessageProps } from "./shared/CommonMessage"

import "./Toast.scss"
import useTimeout from "../hooks/useTimeout"

interface ToastProps extends Omit<CommonMessageProps, "role" | "closeable"> {
  hideTimeout?: number
}

const Toast = (props: ToastProps) => {
  const classNames = ["toast"]
  if (props.className) classNames.push(props.className)

  const toastStack = useRef<Element>()
  const [mount, setMount] = useState(false)

  useEffect(() => {
    let el: HTMLElement | null = document.querySelector("#toast-stack")
    if (!el) {
      el = document.createElement("div")
      el.id = "toast-stack"
      el.ariaLive = "polite"
      el.ariaAtomic = "true"
      document.body.append(el)
    }
    const escHandler = (e: KeyboardEvent) => {
      // TODO: maybe this should hide just this toast, not all toasts
      if (e.key == "Escape") setMount(false)
    }
    el.addEventListener("keyup", escHandler)
    toastStack.current = el
    setMount(true)

    return () => el?.removeEventListener("keyup", escHandler)
  }, [toastStack])

  useTimeout(() => {
    setMount(false)
  }, props.hideTimeout)

  return (mount && toastStack.current) ? createPortal(
    <CommonMessage {...props} tabIndex={0} role="alert" closeable className={classNames.join(" ")} />,
    toastStack.current
  ) : null
}

export default Toast
