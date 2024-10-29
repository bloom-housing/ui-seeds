import React from "react"
import FieldValue from "../FieldValue"
import MDXDocs from "./FieldValue.docs.mdx"

export default {
  title: "Forms/FieldValue",
  component: FieldValue,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const Default = () => <FieldValue label="Alternate Contact">Firstname Lastname</FieldValue>

export const NoLabel = () => <FieldValue>Firstname Lastname</FieldValue>

export const WithHelperText = () => (
  <FieldValue label="Alternate Contact" helpText="Family Member">
    Firstname Lastname
  </FieldValue>
)
