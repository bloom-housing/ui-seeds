import React, { useEffect, useRef } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Icon from "../icons/Icon"
import Overlay from "./Overlay"
import Heading from "../text/Heading"
import "./Dialog.scss"

export interface DialogHeaderProps {
  children: React.ReactNode
  /** Function to call when clicking the close icon */
  onClose: () => void
  closeButtonLast?: boolean
  /** Additional class name */
  className?: string
}

const DialogHeader = (props: DialogHeaderProps) => {
  const classNames = ["seeds-dialog-header"]
  if (props.closeButtonLast) classNames.push("has-close-button-last")

  const headerRef = useRef<HTMLElement>(null)
  // Focus on the heading on render so that it is read by screen readers
  useEffect(() => {
    headerRef.current?.querySelector<HTMLElement>(".seeds-dialog-heading")?.focus()
  }, [])

  const closeButton = (
    <button onClick={props.onClose}>
      <Icon icon={faXmark} size={"lg"} className={"seeds-dialog-close-icon"} />
    </button>
  )

  return (
    <header className={classNames.join(" ")} ref={headerRef}>
      {!props.closeButtonLast && closeButton}
      <Heading priority={1} size="2xl" className={"seeds-dialog-heading"} tabIndex={-1}>
        {props.children}
      </Heading>
      {props.closeButtonLast && closeButton}
    </header>
  )
}

const DialogContent = (props) => {
  const classNames = ["seeds-dialog-content"]
  if (props.fullHeight) classNames.push("is-full-height")

  return <div className={classNames.join(" ")}>{props.children}</div>
}

export interface DialogFooterProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
}

const DialogFooter = (props: DialogFooterProps) => {
  const classNames = ["seeds-dialog-footer"]
  if (props.className) classNames.push(props.className)

  return <footer className={classNames.join(" ")}>{props.children}</footer>
}

export interface DialogProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
  /** If this dialog is open */
  isOpen: boolean
  /** Function to call when hitting ESC or clicking background overlay */
  onClose: () => void
  /** If this dialog renders nested above another dialog */
  nested?: boolean
  /** Additional class name for the Overlay */
  overlayClassName?: string
}

const Dialog = (props: DialogProps) => {
  if (!props.isOpen) return null

  const classNames = ["seeds-dialog"]
  if (props.className) classNames.push(props.className)
  if (props.nested) classNames.push("seeds-dialog-nested")

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
