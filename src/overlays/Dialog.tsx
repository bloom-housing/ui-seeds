import React, { useEffect, useRef } from "react"

import Overlay, {
  OverlayProps,
  OverlayContent,
  OverlayContentProps,
  OverlayFooter,
  OverlayFooterProps,
  OverlayHeader,
  OverlayHeaderProps,
} from "./Overlay"

import "./Dialog.scss"

const DialogHeader = (props: OverlayHeaderProps) => {
  const classNames = ["seeds-dialog-header"]
  if (props.className) classNames.push(props.className)

  return <OverlayHeader {...props} closeButtonEnd className={classNames.join(" ")} />
}

const DialogContent = (props: OverlayContentProps) => {
  const classNames = ["seeds-dialog-content"]
  if (props.className) classNames.push(props.className)

  return <OverlayContent {...props} className={classNames.join(" ")} />
}

const DialogFooter = (props: OverlayFooterProps) => {
  const classNames = ["seeds-dialog-footer"]
  if (props.className) classNames.push(props.className)

  return <OverlayFooter {...props} className={classNames.join(" ")} />
}

export interface DialogProps extends OverlayProps {}

const Dialog = (props: DialogProps) => {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [props.isOpen])

  if (!props.isOpen) return null

  const classNames = ["seeds-dialog"]
  if (props.className) classNames.push(props.className)

  return (
    <Overlay {...props} className={classNames.join(" ")}>
      {props.children}
    </Overlay>
  )
}

Dialog.Header = DialogHeader
Dialog.Content = DialogContent
Dialog.Footer = DialogFooter

export { Dialog as default, DialogHeader, DialogContent, DialogFooter }
