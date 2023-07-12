import React from "react"

import "./Tag.scss"

export interface TagProps {
  /** Tag text */
  children: React.ReactNode
  /** Appearance of the component */
  variant?:
    | "primary"
    | "primary-inverse"
    | "secondary"
    | "secondary-inverse"
    | "success"
    | "success-inverse"
    | "in-process"
    | "in-process-inverse"
    | "highlight-cool"
    | "highlight-cool-inverse"
    | "highlight-warm"
    | "highlight-warm-inverse"
  /** Tag size */
  size?: "md" | "lg"
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Additional ARIA label */
  ariaLabel?: string
}

export const Tag = (props: TagProps) => {
  const classNames = ["seeds-tag"]

  if (props.className) classNames.push(props.className)

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      data-variant={props.variant || "primary"}
      data-size={props.size}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </span>
  )
}

export default Tag
