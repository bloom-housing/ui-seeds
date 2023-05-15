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
    <Heading size="4xl">Heading 4xl</Heading>
    <Heading size="3xl">Heading 3xl</Heading>
    <Heading size="2xl" priority={2}>Heading 2xl</Heading>
    <Heading size="xl" priority={3}>Heading xl</Heading>
    <Heading size="lg" priority={4}>Heading lg</Heading>
    <Heading size="md" priority={4}>Heading md</Heading>
    <Heading size="sm" priority={5}>Heading sm</Heading>
    <Heading size="xs" priority={6}>Heading xs</Heading>
  </div>
)
