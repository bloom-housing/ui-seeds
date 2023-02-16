import React from "react"

import "./Icon.scss"

export interface CustomIconProps {
  icon: React.ReactNode
  id?: string
  className?: string
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
}

const CustomIcon = (props: CustomIconProps) => {
  const classNames = ["ui-icon"]
  let isHidden = true

  if (props.className) classNames.push(props.className)
  if (props["aria-hidden"] === false) isHidden = false

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      aria-hidden={isHidden}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
    >
      {props.icon}
    </span>
  )
}

export default CustomIcon
