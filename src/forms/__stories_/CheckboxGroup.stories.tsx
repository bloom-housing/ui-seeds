import { useState } from "react"
import CheckboxGroup from "../CheckboxGroup"

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
  const options = ["1", "2", "3"]
  const [values, setValues] = useState<string[]>([])

  return (
      <CheckboxGroup
        label={"My Checkbox Group"}
        values={values}
        options={options}
        id={"MyCheckboxGroup"}
        onChange={setValues}
      />
  )
}

export const WithVariant = () => {
  const options = ["1", "2", "3"]
  const [values, setValues] = useState<string[]>([])

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
