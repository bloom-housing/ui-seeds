import React, { useEffect, useRef } from "react"

import Overlay, { OverlayContent, OverlayFooter, OverlayHeader } from "./Overlay"

import "./Dialog.scss"

const DialogHeader = OverlayHeader

const DialogContent = OverlayContent

const DialogFooter = OverlayFooter

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
