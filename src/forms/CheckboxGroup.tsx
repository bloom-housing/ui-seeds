import React from "react"

import "./CheckboxGroup.scss"
import "../actions/Button.scss"
import { ButtonProps } from "../actions/Button"

export interface CheckboxItem {
  label: string
  value: string
}
export interface CheckboxGroupProps extends Pick<ButtonProps, "size" | "variant"> {
  /** Label content */
  label?: string
  /** Current selected values*/
  values: CheckboxItem[]
  /** An array of strings representing each item in the group*/
  options: CheckboxItem[]
  /** Element ID */
  id: string
  /** Additional CSS classes */
  className?: string
  /** ID for selecting in tests */
  testId?: string
  /** function to call when a checkbox is clicked*/
  onChange: (values: CheckboxItem[]) => void
  /** Appearance of the checked input*/
  checkedVariant?: ButtonProps["variant"]
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const classNames = ["seeds-checkbox-group"]
  if (props.className) classNames.push(props.className)

  const handleCheckboxChange = (label: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    const newValue = checked
      ? [...props.values, { label: label, value: name }]
      : props.values.filter((v) => v.value !== name)
    props.onChange(newValue)
  }

  const isChecked = (option: CheckboxItem) => {
    return props.values.some((v) => v.value === option.value)
  }

  return (
    <div id={props.id} className={classNames.join(" ")} data-testid={props.testId}>
      {props.options.map((option) => (
        <div key={`${props.id}-${option.value}-container`}>
          <input
            type="checkbox"
            name={option.value}
            id={`${props.id}-${option.value}`}
            checked={isChecked(option)}
            onChange={(e) => handleCheckboxChange(option.label, e)}
            className="seeds-screen-reader-only"
          />
          <label
            className="seeds-button"
            data-variant={
              isChecked(option) ? props.checkedVariant || "primary" : props.variant || "secondary"
            }
            data-size={props.size || "lg"}
            htmlFor={`${props.id}-${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CheckboxGroup
