import React from "react"

import "./FormErrorMessage.scss"

export interface FormErrorMessageProps {
  children: React.ReactNode
  id?: string
  className?: string
}

const FormErrorMessage = (props: FormErrorMessageProps) => {
  const classNames = ["form-error-message"]
  if (props.className) {
    classNames.push(props.className)
  }

  return (
    <span
      id={props.id}
      className={classNames.join(" ")}
      aria-live="assertive"
    >
      {props.children}
    </span>
  )
}

export default FormErrorMessage