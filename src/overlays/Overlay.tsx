import React from "react"
import FocusTrap from "focus-trap-react"
import "./Overlay.scss"

export interface OverlayProps {
  children: React.ReactNode
  /** Additional class name */
  className?: string
}

const Overlay = (props: OverlayProps) => {
  const classNames = ["seeds-overlay"]
  if (props.className) classNames.push(props.className)

  return (
    <div className={classNames.join(" ")}>
      <div className="seeds-overlay-background" />
      <FocusTrap
        focusTrapOptions={{
          fallbackFocus: "#seeds-overlay-focus-fallback",
        }}
      >
        <div id="seeds-overlay-focus-fallback">{props.children}</div>
      </FocusTrap>
    </div>
  )
}

export { Overlay as default }
