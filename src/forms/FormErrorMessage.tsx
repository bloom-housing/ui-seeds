import React from "react"

import "./FormErrorMessage.scss"

export interface FormErrorMessageProps {
  /** Message content */
  children: React.ReactNode
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** ID for selecting in tests */
  testId?: string
}

/**
 * Component used to display an error message under a form field when the user input is invalid.
 */
const FormErrorMessage = (props: FormErrorMessageProps) => {
  const classNames = ["seeds-form-error-message"]
  if (props.className) classNames.push(props.className)

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      aria-live="assertive"
      data-testid={props.testId}
    >
      {props.children}
    </span>
  )
}

export default FormErrorMessage
