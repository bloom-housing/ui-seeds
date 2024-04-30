import { useState } from "react"
import CheckboxGroup, { CheckboxItem } from "../CheckboxGroup"

import MDXDocs from "./CheckboxGroup.docs.mdx"

export default {
  title: "Forms/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const Standalone = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ]
  const [values, setValues] = useState<CheckboxItem[]>([])

  return (
    <CheckboxGroup
      label={"My Checkbox Group"}
      values={values}
      options={options}
      id={"MyCheckboxGroupNew"}
      onChange={setValues}
    />
  )
}

export const WithVariant = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ]
  const [values, setValues] = useState<CheckboxItem[]>([])

  return (
    <CheckboxGroup
      label={"My Checkbox Group"}
      values={values}
      options={options}
      id={"MyCheckboxGroup"}
      onChange={setValues}
      variant="alert"
      checkedVariant="success"
    />
  )
}
