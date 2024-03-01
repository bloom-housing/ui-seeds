import React, { forwardRef } from "react"
import { CheckIcon, ClockIcon, XMarkIcon, InformationCircleIcon, LockClosedIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid"
import Icon from "../../icons/Icon"
import useToggle from "../../hooks/useToggle"

import "./CommonMessage.scss"

const CommonMessageIconMap: Record<string, any> = {
  primary: InformationCircleIcon,
  "primary-inverse": InformationCircleIcon,
  success: CheckIcon,
  "success-inverse": CheckIcon,
  alert: ExclamationTriangleIcon,
  "alert-inverse": ExclamationTriangleIcon,
  warn: ClockIcon,
  "warn-inverse": ClockIcon,
  secondary: LockClosedIcon,
  "secondary-inverse": LockClosedIcon,
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

const CommonMessage = forwardRef((props: CommonMessageProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const [visible, toggler] = useToggle(true)
  const classNames = ["seeds-common-message"]
  if (props.fullwidth) classNames.push("is-fullwidth")
  if (props.className) classNames.push(props.className)

  const variant = props.variant || "primary"
  const VariantIcon = CommonMessageIconMap[variant]

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
        : VariantIcon && <Icon size="md"><VariantIcon /></Icon>}
      <span data-part="content">{props.children}</span>
      {props.closeable && (
        <button aria-label="Close" onClick={toggler}>
          <Icon size="md"><XMarkIcon /></Icon>
        </button>
      )}
    </div>
  ) : null
})

export default CommonMessage
