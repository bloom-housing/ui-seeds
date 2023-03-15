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
import Icon from "../icons/Icon"
import useToggle from "../hooks/useToggle"

import "./Alert.scss"

const AlertIconMap: Record<string, IconDefinition> = {
  primary: faInfoCircle,
  "primary-light": faInfoCircle,
  success: faCheck,
  "success-light": faCheck,
  alert: faTriangleExclamation,
  "alert-light": faTriangleExclamation,
  warn: faClock,
  "warn-light": faClock,
  secondary: faLock,
  "secondary-light": faLock,
}

interface AlertProps {
  /** Message content */
  children: React.ReactNode
  variant?:
    | "primary"
    | "primary-light"
    | "success"
    | "success-light"
    | "alert"
    | "alert-light"
    | "warn"
    | "warn-light"
    | "secondary"
    | "secondary-light"
  customIcon?: React.ReactNode
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const Alert = (props: AlertProps) => {
  const [visible, toggler] = useToggle(true)
  const classNames = ["alert"]
  if (props.className) classNames.push(props.className)

  const variant = props.variant || "primary"

  return (
    <div
      id={props.id}
      className={classNames.join(" ")}
      data-variant={variant}
      hidden={visible === false}
    >
      {props.customIcon
        ? props.customIcon
        : AlertIconMap[variant] && <Icon icon={AlertIconMap[variant]} size="md" />}
      <span data-part="content">{props.children}</span>
      <button onClick={toggler}>
        <Icon icon={faClose} size="md" />
      </button>
    </div>
  )
}

export default Alert
