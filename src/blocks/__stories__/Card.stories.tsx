import React from "react"
import Card from "../Card"
import HeadingGroup from "../../text/HeadingGroup"

import MDXDocs from "./Card.docs.mdx"

export default {
  title: "Blocks/Card",
  component: Card,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

const DocsWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ maxWidth: "500px" }}>{props.children}</div>
}

const DocsGridWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ maxWidth: "500px", display: "grid", gap: "2rem" }}>{props.children}</div>
}

export const TextContent = () => (
  <DocsWrapper>
    <Card>
      <Card.Header>
        <HeadingGroup size="2xl" heading="Wildflower" subheading="Wildflower (or wild flower)" />
      </Card.Header>

      <Card.Section>
        <p>
          A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
          term implies that the plant probably is neither a hybrid nor a selected cultivar that is
          in any way different from the way it appears in the wild as a native plant. even if it is
          growing where it would not naturally.
        </p>
      </Card.Section>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>
  </DocsWrapper>
)

export const FlushDividers = () => (
  <DocsWrapper>
    <Card>
      <Card.Header divider="flush">
        <HeadingGroup size="2xl" heading="Wildflower" subheading="Wildflower (or wild flower)" />
      </Card.Header>

      <Card.Section divider="flush">
        <p>
          A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
          term implies that the plant probably is neither a hybrid nor a selected cultivar that is
          in any way different from the way it appears in the wild as a native plant. even if it is
          growing where it would not naturally.
        </p>
      </Card.Section>

      <Card.Section divider="flush">
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>
  </DocsWrapper>
)

export const InsetDividers = () => (
  <DocsWrapper>
    <Card>
      <Card.Header divider="inset">
        <HeadingGroup size="2xl" heading="Wildflower" subheading="Wildflower (or wild flower)" />
      </Card.Header>

      <Card.Section divider="inset">
        <p>
          A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
          term implies that the plant probably is neither a hybrid nor a selected cultivar that is
          in any way different from the way it appears in the wild as a native plant. even if it is
          growing where it would not naturally.
        </p>
      </Card.Section>

      <Card.Section divider="inset">
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>
  </DocsWrapper>
)

export const WithFooter = () => (
  <DocsWrapper>
    <Card>
      <Card.Header>
        <HeadingGroup size="2xl" heading="Wildflower" subheading="Wildflower (or wild flower)" />
      </Card.Header>

      <Card.Section>
        <p>
          A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
          term implies that the plant probably is neither a hybrid nor a selected cultivar that is
          in any way different from the way it appears in the wild as a native plant. even if it is
          growing where it would not naturally.
        </p>
      </Card.Section>

      <Card.Section>
        <p>
          A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
          term implies that the plant probably is neither a hybrid nor a selected cultivar that is
          in any way different from the way it appears in the wild as a native plant. even if it is
          growing where it would not naturally.
        </p>
      </Card.Section>

      <Card.Footer id="test-card-footer">
        <Card.Section>
          <p>
            The term can refer to the flowering plant as a whole, even when not in bloom, and not
            just the flower.
          </p>
        </Card.Section>
      </Card.Footer>
    </Card>

    <style>
      {"#test-card-footer { --card-footer-background-color: var(--seeds-color-primary-light) }"}
    </style>
  </DocsWrapper>
)

export const Spacings = () => (
  <DocsGridWrapper>
    <Card spacing="none">
      <Card.Header>
        <HeadingGroup size="2xl" heading="none" subheading="No Spacing" />
      </Card.Header>

      <br />
      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="sm">
      <Card.Header>
        <HeadingGroup size="2xl" heading="sm" subheading="Small Spacing" />
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="md">
      <Card.Header>
        <HeadingGroup size="2xl" heading="md" subheading="Medium (Default) Spacing" />
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="lg">
      <Card.Header>
        <HeadingGroup size="2xl" heading="lg" subheading="Large Spacing" />
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="xl">
      <Card.Header>
        <HeadingGroup size="2xl" heading="xl" subheading="Extra Large Spacing" />
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>
  </DocsGridWrapper>
)
