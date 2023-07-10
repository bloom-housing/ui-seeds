import React from "react"

export interface TagProps {
  className?: string
  children: React.ReactNode
  ariaLabel?: string
}

export const Tag = (props: TagProps) => {
  const classNames = ["seeds-tag"]

  if (props.className) classNames.push(props.className)

  return (
    <span className={classNames.join(" ")} aria-label={props.ariaLabel}>
      {props.children}
    </span>
  )
}
