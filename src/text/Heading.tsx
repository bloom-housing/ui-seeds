import React from "react"
import { SeedsSizes } from "../global/sharedTypes"

export type HeadingSize = SeedsSizes

export interface HeadingProps {
  /** Heading text */
  children: React.ReactNode
  /** Heading size */
  size?: HeadingSize
  /** Heading level (`h1` through `h6`) */
  priority?: 1 | 2 | 3 | 4 | 5 | 6
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Tab index for the heading element */
  tabIndex?: number
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Heading = (props: HeadingProps) => {
  const priority = props.priority || 1
  const size = props.size || "4xl"
  const HnTag = `h${priority}` as HeadingTag

  const classNames = [`text-heading-${size}`]
  if (props.className) classNames.push(props.className)

  return (
    <HnTag id={props.id} className={classNames.join(" ")} tabIndex={props.tabIndex}>
      {props.children}
    </HnTag>
  )
}

export default Heading
