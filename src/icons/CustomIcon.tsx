import React from "react"
import { CommonIconProps, iconClassNames } from "./CommonIconProps"

import "./Icon.scss"

export interface CustomIconProps extends CommonIconProps {
  /** SVG element from JSX code */
  icon: React.ReactNode
}

const CustomIcon = (props: CustomIconProps) => {
  const classNames = iconClassNames(props)
  const isHidden = !(props["aria-hidden"] === false)

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      data-size={props.size}
      aria-hidden={isHidden}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
    >
      {props.icon}
    </span>
  )
}

export default CustomIcon
