import React, { useEffect } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { nanoid } from "nanoid"
import Icon from "../icons/Icon"
import Overlay from "./Overlay"
import Heading from "../text/Heading"
import useKeyPress from "../hooks/useKeyPress"
import "./Drawer.scss"

export interface DrawerFooterProps {
  /** Additional class name */
  className?: string
  children: React.ReactNode
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
  /** Heading text */
  heading: string
  /** Function to call when clicking the close icon */
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

  useKeyPress("Escape", () => props.onClose())
  const uniqueHeaderId = nanoid()

  // Focus on the heading on render so that it is read by screen readers
  useEffect(() => {
    document.getElementById(uniqueHeaderId)?.focus()
  }, [])

  return (
    <Overlay className={props.overlayClassName || ""}>
      <div role="dialog" className={classNames.join(" ")}>
        <header className={"seeds-drawer-header"}>
          <button onClick={props.onClose}>
            <Icon icon={faXmark} size={"lg"} className={"seeds-drawer-close-icon"} />
          </button>
          <Heading
            priority={1}
            size="2xl"
            className={"seeds-drawer-heading"}
            id={uniqueHeaderId}
            tabIndex={-1}
          >
            {props.heading}
          </Heading>
        </header>
        <div className={"seeds-drawer-content"}>{props.children}</div>
      </div>
    </Overlay>
  )
}

Drawer.Footer = DrawerFooter

export { Drawer as default, DrawerFooter }
