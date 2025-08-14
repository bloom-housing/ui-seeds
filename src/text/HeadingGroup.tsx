import React from "react"
import Heading, { HeadingProps } from "./Heading"
import "./HeadingGroup.scss"

export interface HeadingGroupProps extends Pick<HeadingProps, "size"> {
  /** A string or element to display in an `h2` tag (overridable via `headingProps.priority`) */
  heading: React.ReactNode
  /** A string or element to display in a `p` tag */
  subheading: React.ReactNode
  /**
   * The heading level (1 through 6)
   * @default 2
   */
  headingProps?: HeadingProps
  /** Element ID */
  id?: string
  /** Additional class name for the whole group */
  className?: string
}

const HeadingGroup = (props: HeadingGroupProps) => {
  const classNames = ["seeds-heading-group"]
  if (props.className) classNames.push(props.className)

  return (
    <hgroup id={props.id} className={classNames.join(" ")} role="group">
      <Heading priority={2} size={"3xl"} {...props.headingProps}>
        {props.heading}
      </Heading>
      <p>{props.subheading}</p>
    </hgroup>
  )
}

export default HeadingGroup
