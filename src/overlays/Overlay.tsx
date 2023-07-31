import React, { useCallback, useEffect, useMemo, useRef, useState, RefObject } from "react"
import { createPortal } from "react-dom"
import FocusTrap from "focus-trap-react"
import { nanoid } from "nanoid"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Icon from "../icons/Icon"
import Heading from "../text/Heading"
import usePortal from "../hooks/usePortal"

import "./Overlay.scss"


export interface OverlayHeaderProps {
  children: React.ReactNode
  /** Function to call when clicking the close icon */
  onClose: () => void
  closeButtonLast?: boolean
  /** Additional class name */
  className?: string
}

const OverlayHeader = (props: OverlayHeaderProps) => {
  const classNames = ["seeds-overlay-header"]
  if (props.closeButtonLast) classNames.push("has-close-button-last")

  const headerRef = useRef<HTMLElement>(null)
  // Focus on the heading on render so that it is read by screen readers
  useEffect(() => {
    headerRef.current?.querySelector<HTMLElement>(".seeds-overlay-heading")?.focus()
  }, [])

  const closeButton = (
    <button onClick={props.onClose}>
      <Icon icon={faXmark} size={"lg"} className={"seeds-overlay-close-icon"} />
    </button>
  )

  return (
    <header className={classNames.join(" ")} ref={headerRef}>
      {!props.closeButtonLast && closeButton}
      <Heading priority={1} size="2xl" className={"seeds-overlay-heading"} tabIndex={-1}>
        {props.children}
      </Heading>
      {props.closeButtonLast && closeButton}
    </header>
  )
}

const OverlayContent = (props) => {
  const classNames = ["seeds-overlay-content"]
  if (props.fullHeight) classNames.push("is-full-height")

  return <div className={classNames.join(" ")}>{props.children}</div>
}

export interface OverlayFooterProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
}

const OverlayFooter = (props: OverlayFooterProps) => {
  const classNames = ["seeds-overlay-footer"]
  if (props.className) classNames.push(props.className)

  return <footer className={classNames.join(" ")}>{props.children}</footer>
}


export interface OverlayProps {
  children: React.ReactNode
  /** Function to call when clicking the close icon */
  onClose: () => void
  overlayClassName?: string
  /** Additional class name */
  className?: string
}

const Overlay = (props: OverlayProps) => {
  const classNames = ["seeds-overlay-container"]
  if (props.className) classNames.push(props.className)

  const overlayClassNames = ["seeds-overlay"]
  if (props.overlayClassName) overlayClassNames.push(props.overlayClassName)

  const uniqueFocusId = useMemo(() => nanoid(), [])

  const [overlayPortalEl, overlayRef, mount] = usePortal("seeds-overlay-portal", props.onClose)

  return mount && overlayPortalEl.current
    ? createPortal(
        <div className={overlayClassNames.join(" ")} ref={overlayRef}>
          <div className="seeds-overlay-background" onClick={props.onClose} />
          <FocusTrap
            focusTrapOptions={{
              allowOutsideClick: true,
              fallbackFocus: `#{uniqueFocusId}`,
            }}
          >
            <div id={uniqueFocusId} className={classNames.join(" ")} role="dialog">
              {props.children}
            </div>
          </FocusTrap>
        </div>,
        overlayPortalEl.current
      )
    : null
}

export { Overlay as default, OverlayHeader, OverlayContent, OverlayFooter }
