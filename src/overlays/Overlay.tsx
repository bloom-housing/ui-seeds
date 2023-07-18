import React from "react"
import FocusTrap from "focus-trap-react"
import "./Overlay.scss"

export interface OverlayProps {
  children: React.ReactNode
  className?: string
}

const Overlay = (props: OverlayProps) => {
  const classNames = ["seeds-overlay"]
  if (props.className) classNames.push(props.className)

  return (
    <div className={classNames.join(" ")}>
      <div className="seeds-overlay-background" />
      <FocusTrap>{props.children}</FocusTrap>
    </div>
  )
}

export { Overlay as default }
