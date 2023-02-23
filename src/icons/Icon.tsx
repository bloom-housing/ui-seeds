import React from "react"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CommonIconProps, iconClassNames } from "./CommonIconProps"

import "./Icon.scss"

export interface IconProps extends CommonIconProps {
  /** Icon SVG metadata imported from Font Awesome */
  icon: IconDefinition
}

const Icon = (props: IconProps) => {
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
      <FontAwesomeIcon icon={props.icon} />
    </span>
  )
}

export default Icon
