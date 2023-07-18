import React from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Icon from "../icons/Icon"
import Heading from "../text/Heading"
import "./Drawer.scss"

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

  return (
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
  )
}

export { Drawer as default }
