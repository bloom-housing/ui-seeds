import React, { forwardRef } from "react"
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
  children?: React.ReactNode
  /** Appearance of the component */
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
  /** Pass in an `<Icon>` or SVG content */
  customIcon?: React.ReactNode
  /** If the component can hide via a close icon */
  closeable?: boolean
  /** A callback function when the component has closed */
  onClose?: () => void
  /** Scale to fit component to its container */
  fullwidth?: boolean
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** ID for selecting in tests */
  testId?: string
  role?: string
  "aria-label"?: string
  "aria-labelledby"?: string
  tabIndex?: number
}

const CommonMessage = forwardRef(
  (props: CommonMessageProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [visible, toggler] = useToggle(true)
    const classNames = ["seeds-common-message"]
    if (props.fullwidth) classNames.push("is-fullwidth")
    if (props.className) classNames.push(props.className)

    const variant = props.variant || "primary"

    return props.children ? (
      <div
        ref={ref}
        id={props.id}
        className={classNames.join(" ")}
        data-variant={variant}
        hidden={visible === false}
        role={props.role}
        tabIndex={props.tabIndex}
        data-testid={props.testId}
      >
        {props.customIcon
          ? props.customIcon
          : CommonMessageIconMap[variant] && (
              <Icon icon={CommonMessageIconMap[variant]} size="md" />
            )}
        <span data-part="content">{props.children}</span>
        {props.closeable && (
          <button
            aria-label="Close"
            onClick={() => {
              toggler()
              if (props.onClose) {
                props.onClose()
              }
            }}
          >
            <Icon icon={faClose} size="md" />
          </button>
        )}
      </div>
    ) : null
  }
)

export default CommonMessage
