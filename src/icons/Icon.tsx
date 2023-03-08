import React from "react"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Icon.scss"

export interface IconProps {
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Specify a specific preset size */
  size?: "sm" | "md" | "lg" | "xl"
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
  tabIndex?: number
  /** Icon SVG metadata imported from Font Awesome */
  icon?: IconDefinition
  /** Custom SVG in JSX if not using Font Awesome */
  children?: React.ReactNode
}

const Icon = (props: IconProps) => {
  const classNames = ["icon"]
  if (props.className) classNames.push(props.className)
  const isHidden = !(props["aria-hidden"] === false)

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      data-size={props.size}
      aria-hidden={isHidden}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
      tabIndex={props.tabIndex}
    >
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : props.children}
    </span>
  )
}

export default Icon
