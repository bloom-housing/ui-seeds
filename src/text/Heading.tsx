import React from "react"

export interface HeadingProps {
  /** Heading text */
  children: React.ReactNode
  /** Typography style of the heading */
  typography?: "heading-1" | "heading-2" | "heading-3" | "heading-4" | "subheading" | "strong" | "label" | "small"
  /** Heading level (`h1` through `h4`) */
  priority?: 1 | 2 | 3 |4
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const Heading = (props: HeadingProps) => {
  const priority = props.priority && props.priority >= 1 && props.priority <= 4 ? props.priority : 1
  const typography = props.typography || "heading-1"
  const HnTag = `h${priority}` as keyof JSX.IntrinsicElements

  const classNames = [`text-${typography}`]
  if (props.className) classNames.push(props.className)

  return <HnTag id={props.id} className={classNames.join(" ")}>{props.children}</HnTag>
}

export default Heading
