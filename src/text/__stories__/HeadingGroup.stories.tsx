import React from "react"
import { Story } from "@storybook/react"

import HeadingGroup from "../HeadingGroup"

import MDXDocs from "./HeadingGroup.docs.mdx"

export default {
  title: "Text/Heading Group",
  component: HeadingGroup,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const headingGroup = () => <HeadingGroup heading="Poppy" subheading="The tiny, kidney-shaped seeds have been harvested from dried seed pods by various civilizations for thousands of years." />

export const headingGroups = () => (
  <div style={{display: "grid", gap: "var(--bloom-s6)"}}>
    <HeadingGroup size="3xl" heading="Poppy" subheading="The tiny, kidney-shaped seeds have been harvested from dried seed pods by various civilizations for thousands of years." />
    <HeadingGroup size="2xl" heading="Sunflower" subheading="For commercial purposes, sunflower seeds are usually classified by the pattern on their husks." />
    <HeadingGroup size="xl" heading="Pumpkin" subheading="Some  pumpkin cultivars are huskless, and are grown only for their edible seed." />
  </div>
)
