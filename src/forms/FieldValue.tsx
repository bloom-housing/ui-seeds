import React from "react"

import "./FieldValue.scss"

export interface FieldValueProps {
  /** Value content */
  children: React.ReactNode
  label: string
  helperText?: string
}

const FieldValue = (props: FieldValueProps) => {
  return (
    <div className="field-value" role="gridcell">
      {props.label && <p data-part="label">{props.label}</p>}
      <p data-part="value">{props.children}</p>
      {props.helperText && <p data-part="helper-text">{props.helperText}</p>}
    </div>
  )
}

export default FieldValue
