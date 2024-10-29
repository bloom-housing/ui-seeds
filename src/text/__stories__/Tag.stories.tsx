import React from "react"
import { FaceSmileIcon } from "@heroicons/react/20/solid"
import Icon from "../../icons/Icon"
import Tag from "../Tag"
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

export const DefaultTag = () => <Tag>Default Tag</Tag>

const DocsWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ marginBottom: "1rem" }}>{props.children}</div>
}

const DocsIconWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ display: "flex", gap: ".5rem" }}>{props.children}</div>
}

export const TagVariants = () => (
  <>
    <DocsWrapper>
      <HeadingGroup size="2xl" heading="md" subheading="Regular Size" />
      <div>
        <Tag variant="primary">Primary Tag</Tag>
        <Tag variant="secondary">Secondary Tag</Tag>
        <Tag variant="success">Success Tag</Tag>
        <Tag variant="warn">Warn Tag</Tag>
        <Tag variant="highlight-cool">Highlight Cool Tag</Tag>
        <Tag variant="highlight-warm">Highlight Warm Tag</Tag>
      </div>
      <div>
        <Tag variant="primary-inverse">Primary Tag</Tag>
        <Tag variant="secondary-inverse">Secondary Tag</Tag>
        <Tag variant="success-inverse">Success Tag</Tag>
        <Tag variant="warn-inverse">Warn Tag</Tag>
        <Tag variant="highlight-cool-inverse">Highlight Cool Tag</Tag>
        <Tag variant="highlight-warm-inverse">Highlight Warm Tag</Tag>
      </div>
    </DocsWrapper>
    <DocsWrapper>
      <HeadingGroup size="2xl" heading="lg" subheading="Large Size" />
      <div>
        <Tag variant="primary" size="lg">
          Primary Tag
        </Tag>
        <Tag variant="secondary" size="lg">
          Secondary Tag
        </Tag>
        <Tag variant="success" size="lg">
          Success Tag
        </Tag>
        <Tag variant="warn" size="lg">
          Warn Tag
        </Tag>
        <Tag variant="highlight-cool" size="lg">
          Highlight Cool Tag
        </Tag>
        <Tag variant="highlight-warm" size="lg">
          Highlight Warm Tag
        </Tag>
      </div>
      <div>
        <Tag variant="primary-inverse" size="lg">
          Primary Tag
        </Tag>
        <Tag variant="secondary-inverse" size="lg">
          Secondary Tag
        </Tag>
        <Tag variant="success-inverse" size="lg">
          Success Tag
        </Tag>
        <Tag variant="warn-inverse" size="lg">
          Warn Tag
        </Tag>
        <Tag variant="highlight-cool-inverse" size="lg">
          Highlight Cool Tag
        </Tag>
        <Tag variant="highlight-warm-inverse" size="lg">
          Highlight Warm Tag
        </Tag>
      </div>
    </DocsWrapper>
    <style>{".seeds-tag { margin: .25rem }"}</style>
  </>
)

export const withIcons = () => (
  <DocsIconWrapper>
    <Tag>
      <Icon>
        <FaceSmileIcon />
      </Icon>{" "}
      Icon Left
    </Tag>
    <Tag>
      Icon Right{" "}
      <Icon>
        <FaceSmileIcon />
      </Icon>
    </Tag>
  </DocsIconWrapper>
)
