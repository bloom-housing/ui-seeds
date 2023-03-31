import React from "react"
import Heading, { HeadingProps } from "./Heading"
import "./HeadingGroup.scss"

export interface HeadingGroupProps extends Pick<HeadingProps, "typography"> {
  /** A string or element to display in an `h2` tag (overridable via `headingPriority`) */
  heading: React.ReactNode
  /** A string or element to display in a `p` tag */
  subheading: React.ReactNode
  /**
   * The heading level (1 through 4)
   * @default 2
   */
  headingPriority?: 1 | 2 | 3 |4
  /** Additional class name for the whole group */
  className?: string
}

const HeadingGroup = (props: HeadingGroupProps) => {
  const classNames = ["heading-group"]
  if (props.className) classNames.push(props.className)

  return (
    <hgroup className={classNames.join(" ")} role="group">
      <Heading priority={props.headingPriority ?? 2} typography={props.typography || "heading-2"}>{props.heading}</Heading>
      <p>{props.subheading}</p>
    </hgroup>
  )
}

export default HeadingGroup