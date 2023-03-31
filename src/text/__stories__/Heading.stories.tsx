import React from "react"
import { Story } from "@storybook/react"

import Heading from "../Heading"

import MDXDocs from "./Heading.docs.mdx"

export default {
  title: "Text/Heading",
  component: Heading,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const heading = () => <Heading>This is a heading</Heading>

export const headings = () => (
  <div style={{display: "grid", gap: "1rem"}}>
    <Heading typography="heading-1">Heading 1</Heading>
    <Heading typography="heading-2">Heading 2</Heading>
    <Heading typography="heading-3" priority={2}>Heading 3</Heading>
    <Heading typography="heading-4" priority={3}>Heading 4</Heading>
    <Heading typography="subheading" priority={4}>Subheading</Heading>
    <Heading typography="strong" priority={4}>Strong</Heading>
    <Heading typography="label" priority={4}>Label</Heading>
    <Heading typography="small" priority={4}>Small</Heading>
  </div>
)
