import React from "react"

import "./FormErrorMessage.scss"

export interface FormErrorMessageProps {
  /** Message content */
  children: React.ReactNode
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * Component used to display an error message under a form field when the user input is invalid.
 */
const FormErrorMessage = (props: FormErrorMessageProps) => {
  const classNames = ["form-error-message"]
  if (props.className) classNames.push(props.className)

  return (
    <span id={props.id} className={classNames.join(" ")} aria-live="assertive">
      {props.children}
    </span>
  )
}

export default FormErrorMessage
