import React, { useCallback, useEffect, useMemo, useRef, useState, RefObject } from "react"
import { createPortal } from "react-dom"
import FocusTrap from "focus-trap-react"
import { nanoid } from "nanoid"
import usePortal from "../hooks/usePortal"

import "./Overlay.scss"

export interface OverlayProps {
  children: React.ReactNode
  /** Function to call when clicking the close icon */
  onClose: () => void
  overlayClassName?: string
  /** Additional class name */
  className?: string
}

const Overlay = (props: OverlayProps) => {
  const overlayClassNames = ["seeds-overlay"]
  if (props.overlayClassName) overlayClassNames.push(props.overlayClassName)

  const uniqueFocusId = useMemo(() => nanoid(), [])

  const [overlayPortalEl, overlayRef, mount] = usePortal("seeds-overlay-portal", props.onClose)

  return mount && overlayPortalEl.current
    ? createPortal(
        <div className={overlayClassNames.join(" ")} ref={overlayRef}>
          <div className="seeds-overlay-background" />
          <FocusTrap
            focusTrapOptions={{
              fallbackFocus: `#{uniqueFocusId}`,
            }}
          >
            <div id={uniqueFocusId} className={props.className} role="dialog">
              {props.children}
            </div>
          </FocusTrap>
        </div>,
        overlayPortalEl.current
      )
    : null
}

export { Overlay as default }
