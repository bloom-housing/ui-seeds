import React from "react"
import FocusTrap from "focus-trap-react"
import "./Overlay.scss"

export interface OverlayProps {
  children: React.ReactNode
  className?: string
}

const Overlay = (props: OverlayProps) => {
  const className = ["seeds-overlay"]
  if (props.className) className.push(props.className)

  return (
    <div className="seeds-overlay">
      <div className="seeds-overlay-background" />
      <FocusTrap>{props.children}</FocusTrap>
    </div>
  )
}

export { Overlay as default }
