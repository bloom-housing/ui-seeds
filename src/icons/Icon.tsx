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
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  /** Set this to true for icons which only use outlined paths */
  outlined?: boolean
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
  tabIndex?: number
  /** DEPRECATED: Icon SVG metadata imported from Font Awesome */
  icon?: IconDefinition
  /** Custom SVG in JSX */
  children?: React.ReactNode
}

const Icon = (props: IconProps) => {
  const classNames = ["seeds-icon"]
  if (props.className) classNames.push(props.className)
  const isHidden = !(props["aria-hidden"] === false)

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      data-size={props.size}
      data-outlined={props.outlined}
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
