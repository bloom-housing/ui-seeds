import React, { useEffect, useRef } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Icon from "../icons/Icon"
import Overlay from "./Overlay"
import Heading from "../text/Heading"
import "./Drawer.scss"

export interface DrawerHeaderProps {
  children: React.ReactNode
  /** Function to call when clicking the close icon */
  onClose: () => void
  /** Additional class name */
  className?: string
}

const DrawerHeader = (props: DrawerHeaderProps) => {
  const headerRef = useRef<HTMLElement>(null)
  // Focus on the heading on render so that it is read by screen readers
  useEffect(() => {
    headerRef.current?.querySelector<HTMLElement>(".seeds-drawer-heading")?.focus()
  }, [])

  return (
    <header className={"seeds-drawer-header"} ref={headerRef}>
      <button onClick={props.onClose}>
        <Icon icon={faXmark} size={"lg"} className={"seeds-drawer-close-icon"} />
      </button>
      <Heading priority={1} size="2xl" className={"seeds-drawer-heading"} tabIndex={-1}>
        {props.children}
      </Heading>
    </header>
  )
}

export interface DrawerFooterProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
}

const DrawerFooter = (props: DrawerFooterProps) => {
  const classNames = ["seeds-drawer-footer"]
  if (props.className) classNames.push(props.className)

  return <footer className={classNames.join(" ")}>{props.children}</footer>
}

export interface DrawerProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
  /** If this Drawer is open */
  isOpen: boolean
  /** Function to call when hitting ESC or clicking background overlay */
  onClose: () => void
  /** If this Drawer renders nested above another Drawer */
  nested?: boolean
  /** Additional class name for the Overlay */
  overlayClassName?: string
}

const Drawer = (props: DrawerProps) => {
  if (!props.isOpen) return null

  const classNames = ["seeds-drawer"]
  if (props.className) classNames.push(props.className)
  if (props.nested) classNames.push("seeds-drawer-nested")

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

Drawer.Header = DrawerHeader
Drawer.Footer = DrawerFooter

export { Drawer as default, DrawerFooter }
