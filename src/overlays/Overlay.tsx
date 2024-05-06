import React, { useEffect, useRef, useId } from "react"
import { createPortal } from "react-dom"
import FocusTrap from "focus-trap-react"
import { XMarkIcon } from "@heroicons/react/20/solid"
import Icon from "../icons/Icon"
import Heading from "../text/Heading"
import usePortal from "../hooks/usePortal"

import "./Overlay.scss"


export interface OverlayHeaderProps {
  children: React.ReactNode
  /** Place the close button at the inline end of the header */
  closeButtonEnd?: boolean
  /** Additional class name */
  className?: string
}

const OverlayHeader = (props: OverlayHeaderProps) => {
  const classNames = ["seeds-overlay-header"]
  if (props.closeButtonEnd) classNames.push("has-close-button-end")
  if (props.className) classNames.push(props.className)

  const headerRef = useRef<HTMLElement>(null)
  // Focus on the heading on render so that it is read by screen readers
  useEffect(() => {
    headerRef.current?.querySelector<HTMLElement>(".seeds-overlay-heading")?.focus()
  }, [])

  const closeButton = (
    <button onClick={() => headerRef.current?.dispatchEvent(new Event("seeds:close", { bubbles: true }))}>
      <Icon size={"lg"} className={"seeds-overlay-close-icon"}><XMarkIcon /></Icon>
    </button>
  )

  return (
    <header className={classNames.join(" ")} ref={headerRef}>
      {!props.closeButtonEnd && closeButton}
      <Heading priority={1} size="xl" className={"seeds-overlay-heading"} tabIndex={-1}>
        {props.children}
      </Heading>
      {props.closeButtonEnd && closeButton}
    </header>
  )
}

export interface OverlayContentProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
}

const OverlayContent = (props: OverlayContentProps) => {
  const classNames = ["seeds-overlay-content"]
  if (props.className) classNames.push(props.className)

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

  // NOTE: the `useId` hook for some reason emits invalid selectors (with colons).
  // So we'll replace those with hyphens:
  const uniqueFocusId = useId().replace(/:/g, "-")

  const [overlayPortalEl, overlayRef, mount] = usePortal("seeds-overlay-portal", props.onClose)

  return mount && overlayPortalEl.current
    ? createPortal(
        <div className={overlayClassNames.join(" ")} ref={overlayRef}>
          <div className="seeds-overlay-background" onClick={props.onClose} />
          <FocusTrap
            focusTrapOptions={{
              allowOutsideClick: true,
              fallbackFocus: `#${uniqueFocusId}`,
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
