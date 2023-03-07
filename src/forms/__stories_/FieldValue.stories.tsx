import React from "react"
import { Story } from "@storybook/react"
import FieldValue from "../FieldValue"

export default {
  title: "Forms/FieldValue",
  component: FieldValue,
}

export const withHelperText = () => <FieldValue label="Property Amenities" helperText="All good stuff">Pool, BBQ, Rooftop View</FieldValue>