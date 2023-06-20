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

export const withLabel = () => (
  <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
)

export const withHelperText = () => (
  <FieldValue label="Property Amenities" helpText="All good stuff">
    Pool, BBQ, Rooftop View
  </FieldValue>
)

export const inAGrid = () => (
  <div role="grid" style={{ maxWidth: "var(--seeds-width-4xl)" }}>
    <div role="row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      <FieldValue label="Property Amenities" helpText="All good stuff">
        Pool, BBQ, Rooftop View
      </FieldValue>
      <FieldValue label="Property Amenities" helpText="All good stuff">
        Pool, BBQ, Rooftop View
      </FieldValue>
      <FieldValue label="Property Amenities" helpText="All good stuff">
        Pool, BBQ, Rooftop View
      </FieldValue>
    </div>
  </div>
)
