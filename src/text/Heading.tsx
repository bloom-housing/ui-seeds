import React from "react"

export interface HeadingProps {
  /** Heading text */
  children: React.ReactNode
  /** Heading size */
  size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs"
  /** Heading level (`h1` through `h6`) */
  priority?: 1 | 2 | 3 | 4 | 5 | 6
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const Heading = (props: HeadingProps) => {
  const priority = props.priority || 1
  const size = props.size || "4xl"
  const HnTag = `h${priority}` as keyof JSX.IntrinsicElements

  const classNames = [`text-heading-${size}`]
  if (props.className) classNames.push(props.className)

  return (
    <HnTag id={props.id} className={classNames.join(" ")}>
      {props.children}
    </HnTag>
  )
}

export default Heading
