import React from "react"
import { SeedsColorInverseVariants, SeedsColorVariants, SeedsSizes } from "../global/sharedTypes"
import "./Tag.scss"

export type TagVariant = SeedsColorVariants | SeedsColorInverseVariants
export type TagSize = Extract<SeedsSizes, "md" | "lg">

export interface TagProps {
  /** Tag text */
  children: React.ReactNode
  /** Appearance of the component */
  variant?: TagVariant
  /** Tag size */
  size?: TagSize
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
