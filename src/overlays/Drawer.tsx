import React, { useEffect, useRef } from "react"

import Overlay, {
  OverlayFooter,
  OverlayFooterProps,
  OverlayContent,
  OverlayContentProps,
  OverlayHeader,
  OverlayHeaderProps,
} from "./Overlay"

import "./Drawer.scss"

const DrawerHeader = (props: OverlayHeaderProps) => {
  const classNames = ["seeds-drawer-header"]
  if (props.className) classNames.push(props.className)

  return <OverlayHeader {...props} className={classNames.join(" ")} />
}

export interface DrawerContentProps extends OverlayContentProps {
  fullHeight?: boolean
}

const DrawerContent = (props: DrawerContentProps) => {
  const classNames = ["seeds-drawer-content"]
  if (props.className) classNames.push(props.className)
  if (props.fullHeight) classNames.push("is-full-height")

  return <OverlayContent {...props} className={classNames.join(" ")} />
}

const DrawerFooter = (props: OverlayFooterProps) => {
  const classNames = ["seeds-drawer-footer"]
  if (props.className) classNames.push(props.className)

  return <OverlayFooter {...props} className={classNames.join(" ")} />
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
Drawer.Content = DrawerContent
Drawer.Footer = DrawerFooter

export { Drawer as default, DrawerHeader, DrawerContent, DrawerFooter }
