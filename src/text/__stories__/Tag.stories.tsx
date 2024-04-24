import React from "react"

import Tag from "../Tag"

import Icon from "../../icons/Icon"
import { FaceSmileIcon } from "@heroicons/react/20/solid"

import MDXDocs from "./Tag.docs.mdx"
import HeadingGroup from "../HeadingGroup"

export default {
  title: "Text/Tag",
  component: Tag,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const defaultTag = () => <Tag>Default Tag</Tag>

export const tagVariants = () => (
  <>
    <HeadingGroup size="2xl" heading="md" subheading="Regular Size" />
    <div style={{ marginTop: "1rem" }}>
      <Tag variant="primary">Primary Tag</Tag>
      <Tag variant="secondary">Secondary Tag</Tag>
      <Tag variant="success">Success Tag</Tag>
      <Tag variant="in-process">In Process Tag</Tag>
      <Tag variant="highlight-cool">Highlight Cool Tag</Tag>
      <Tag variant="highlight-warm">Highlight Warm Tag</Tag>
    </div>
    <div style={{ marginBottom: "2rem" }}>
      <Tag variant="primary-inverse">Primary Tag</Tag>
      <Tag variant="secondary-inverse">Secondary Tag</Tag>
      <Tag variant="success-inverse">Success Tag</Tag>
      <Tag variant="in-process-inverse">In Process Tag</Tag>
      <Tag variant="highlight-cool-inverse">Highlight Cool Tag</Tag>
      <Tag variant="highlight-warm-inverse">Highlight Warm Tag</Tag>
    </div>
    <HeadingGroup size="2xl" heading="lg" subheading="Large Size" />
    <div style={{ marginTop: "1rem" }}>
      <Tag variant="primary" size="lg">
        Primary Tag
      </Tag>
      <Tag variant="secondary" size="lg">
        Secondary Tag
      </Tag>
      <Tag variant="success" size="lg">
        Success Tag
      </Tag>
      <Tag variant="in-process" size="lg">
        In Process Tag
      </Tag>
      <Tag variant="highlight-cool" size="lg">
        Highlight Cool Tag
      </Tag>
      <Tag variant="highlight-warm" size="lg">
        Highlight Warm Tag
      </Tag>
    </div>
    <div style={{ marginBottom: "2rem" }}>
      <Tag variant="primary-inverse" size="lg">
        Primary Tag
      </Tag>
      <Tag variant="secondary-inverse" size="lg">
        Secondary Tag
      </Tag>
      <Tag variant="success-inverse" size="lg">
        Success Tag
      </Tag>
      <Tag variant="in-process-inverse" size="lg">
        In Process Tag
      </Tag>
      <Tag variant="highlight-cool-inverse" size="lg">
        Highlight Cool Tag
      </Tag>
      <Tag variant="highlight-warm-inverse" size="lg">
        Highlight Warm Tag
      </Tag>
    </div>
    <style>{".seeds-tag { margin: .25rem }"}</style>
  </>
)

export const withIcons = () => (
  <>
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Tag>
        <Icon><FaceSmileIcon /></Icon> Icon Left
      </Tag>
      <Tag>
        Icon Right <Icon><FaceSmileIcon /></Icon>
      </Tag>
    </div>
  </>
)
