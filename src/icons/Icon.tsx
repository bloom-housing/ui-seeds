import React from "react"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Icon.scss"

export interface IconProps {
  icon: IconDefinition
  id?: string
  className?: string
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
}

const Icon = (props: IconProps) => {
  const classNames = ["ui-icon"]
  let isHidden = true

  if (props.className) classNames.push(props.className)
  if (props["aria-hidden"] === false) isHidden = false

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      aria-hidden={isHidden}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
    >
      <FontAwesomeIcon icon={props.icon} />
    </span>
  )
}

export default Icon
