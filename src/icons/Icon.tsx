import React from "react"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./Icon.scss"

export interface IconProps {
  icon: IconDefinition
  id?: string
  className?: string 
  ariaHidden?: boolean
}

const Icon = (props: IconProps) => {
  const classNames = ["ui-icon"]
  if (props.className) classNames.push(props.className)

  return (
    <span id={props.id} className={classNames.join(" ")} aria-hidden={props.ariaHidden}>
      <FontAwesomeIcon icon={props.icon} />
    </span>
  )
}

export default Icon
