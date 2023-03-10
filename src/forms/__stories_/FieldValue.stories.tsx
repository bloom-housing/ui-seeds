import React from "react"
import { Story } from "@storybook/react"
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

export const standalone = () => <FieldValue>Pool, BBQ, Rooftop View</FieldValue>

export const withLabel = () => <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>

export const withHelperText = () => <FieldValue label="Property Amenities" helpText="All good stuff">Pool, BBQ, Rooftop View</FieldValue>