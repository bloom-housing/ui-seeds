import React from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
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

  return <div className={classNames.join(" ")}>{props.children}</div>
}

export interface DrawerProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  heading: string
  onClose: () => void
}

const Drawer = (props: DrawerProps) => {
  if (!props.isOpen) return null

  const className = ["seeds-drawer"]
  if (props.className) className.push(props.className)

  useKeyPress("Escape", () => props.onClose())

  return (
    <Overlay>
      <div role="dialog" className={"seeds-drawer"}>
        <div className={"seeds-drawer-header"}>
          <button onClick={props.onClose}>
            <Icon icon={faXmark} size={"md"} />
          </button>
          <Heading priority={1} size="xl">
            {props.heading}
          </Heading>
        </div>
        <div className={"seeds-drawer-content"}>{props.children}</div>
      </div>
    </Overlay>
  )
}

Drawer.Footer = DrawerFooter

export { Drawer as default, DrawerFooter }
