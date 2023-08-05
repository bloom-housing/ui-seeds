import React, { useEffect, useRef } from "react"

import Overlay, { OverlayContent, OverlayContentProps, OverlayFooter, OverlayFooterProps, OverlayHeader, OverlayHeaderProps } from "./Overlay"

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

export interface DialogProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
  /** If this dialog is open */
  isOpen: boolean
  /** Function to call when hitting ESC or clicking background overlay */
  onClose: () => void
  /** Additional class name for the Overlay */
  overlayClassName?: string
}

const Dialog = (props: DialogProps) => {
  if (!props.isOpen) return null

  const classNames = ["seeds-dialog"]
  if (props.className) classNames.push(props.className)

  return (
    <Overlay
      className={classNames.join(" ")}
      overlayClassName={props.overlayClassName}
      onClose={props.onClose}
    >
      {props.children}
    </Overlay>
  )
}

Dialog.Header = DialogHeader
Dialog.Content = DialogContent
Dialog.Footer = DialogFooter

export { Dialog as default, DialogHeader, DialogContent, DialogFooter }
