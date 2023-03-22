import React from "react"
import {
  faCheck,
  faClock,
  faClose,
  faInfoCircle,
  faLock,
  faTriangleExclamation,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"
import Icon from "../../icons/Icon"
import useToggle from "../../hooks/useToggle"

import "./CommonMessage.scss"

const CommonMessageIconMap: Record<string, IconDefinition> = {
  primary: faInfoCircle,
  "primary-inverse": faInfoCircle,
  success: faCheck,
  "success-inverse": faCheck,
  alert: faTriangleExclamation,
  "alert-inverse": faTriangleExclamation,
  warn: faClock,
  "warn-inverse": faClock,
  secondary: faLock,
  "secondary-inverse": faLock,
}

export interface CommonMessageProps {
  /** Message content */
  children: React.ReactNode
  variant?:
    | "primary"
    | "primary-inverse"
    | "success"
    | "success-inverse"
    | "alert"
    | "alert-inverse"
    | "warn"
    | "warn-inverse"
    | "secondary"
    | "secondary-inverse"
  customIcon?: React.ReactNode
  closable?: boolean
  fullwidth?: boolean
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  role?: string
  "aria-label"?: string
  "aria-labelledby"?: string
}

const CommonMessage = (props: CommonMessageProps) => {
  const [visible, toggler] = useToggle(true)
  const classNames = ["common-message"]
  if (props.fullwidth) classNames.push("is-fullwidth")
  if (props.className) classNames.push(props.className)

  const variant = props.variant || "primary"

  return (
    <div
      id={props.id}
      className={classNames.join(" ")}
      data-variant={variant}
      hidden={visible === false}
      role={props.role}
    >
      {props.customIcon
        ? props.customIcon
        : CommonMessageIconMap[variant] && <Icon icon={CommonMessageIconMap[variant]} size="md" />}
      <span data-part="content">{props.children}</span>
      {props.closable && (
        <button onClick={toggler}>
          <Icon icon={faClose} size="md" />
        </button>
      )}
    </div>
  )
}

export default CommonMessage
