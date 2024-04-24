import React from "react"

import "./CheckboxGroup.scss"
import "../actions/Button.scss"
import { ButtonProps } from "actions/Button"

export interface CheckboxGroupProps extends Pick<ButtonProps, "size" | "variant"> {
  /** Label content */
  label?: string
  /** Current selected values*/
  values: string[]
  /** An array of strings representing each item in the group*/
  options: string[]
  /** Element ID */
  id: string
  /** Additional CSS classes */
  className?: string
  /** ID for selecting in tests */
  testId?: string
  /** function to call when a checkbox is clicked*/
  onChange: (values: string[]) => void
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const classNames = ["seeds-checkbox-group"]
  if (props.className) classNames.push(props.className)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    const newValue = checked ? [...props.values, name] : props.values.filter((v) => v !== name)
    props.onChange(newValue)
  }

  return (
    <div id={props.id} className={classNames.join(" ")} data-testid={props.testId}>
      {props.options.map((option) => (
        <div key={`${option}-container`}>
          <input
            type="checkbox"
            name={option}
            id={option}
            checked={props.values.includes(option)}
            onChange={handleCheckboxChange}
            className="seeds-checkbox-hide"
          />
          <label
            className="seeds-button"
            data-variant={props.variant || "primary"}
            data-size={props.size || "lg"}
            htmlFor={option}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CheckboxGroup
