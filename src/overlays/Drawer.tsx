import React, { useEffect, useRef } from "react"

import Overlay, { OverlayContent, OverlayFooter, OverlayHeader } from "./Overlay"

import "./Drawer.scss"

const DrawerHeader = OverlayHeader

const DrawerContent = OverlayContent

const DrawerFooter = OverlayFooter

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
