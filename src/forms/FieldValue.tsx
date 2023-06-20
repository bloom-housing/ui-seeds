import React from "react"

import "./FieldValue.scss"

export interface FieldValueProps {
  /** Label content */
  label?: string
  /** Value content */
  children: React.ReactNode
  /** Additional help text below the content */
  helpText?: string
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const FieldValue = (props: FieldValueProps) => {
  const classNames = ["seeds-field-value"]
  if (props.className) classNames.push(props.className)

  return (
    <div id={props.id} className={classNames.join(" ")} role="gridcell">
      {props.label && <p data-part="label">{props.label}</p>}
      <p data-part="value">{props.children}</p>
      {props.helpText && <p data-part="help-text">{props.helpText}</p>}
    </div>
  )
}

export default FieldValue
