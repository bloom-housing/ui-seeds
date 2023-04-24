import React from "react"
import Card from "../Card"

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

const sharedStyles =
  ".test-card-header h3 { font-family: var(--bloom-font-serif); font-weight: normal; font-size: var(--bloom-font-size-2xl); line-height: var(--bloom-line-height-heading);"

export const TextContent = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header className="test-card-header">
        <h3>Wildflower</h3>
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

    <style>{sharedStyles}</style>
  </div>
)

export const FlushDividers = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header divider="flush" className="test-card-header">
        <h3>Wildflower</h3>
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

    <style>{sharedStyles}</style>
  </div>
)

export const InsetDividers = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header className="test-card-header" divider="inset">
        <h3>Wildflower</h3>
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

    <style>{sharedStyles}</style>
  </div>
)

export const WithFooter = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header className="test-card-header">
        <h3>Wildflower</h3>
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
      {"#test-card-footer { --card-footer-background-color: var(--bloom-color-primary-lighter) }"}
    </style>
    <style>{sharedStyles}</style>
  </div>
)

export const Spacings = () => (
  <div style={{ maxWidth: "500px", display: "grid", gap: "2rem" }}>
    <Card spacing="none">
      <Card.Header className="test-card-header">
        <h3>"None" Spacing</h3>
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="sm">
      <Card.Header className="test-card-header">
        <h3>Small Spacing</h3>
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="base">
      <Card.Header className="test-card-header">
        <h3>Default (Base) Spacing</h3>
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="md">
      <Card.Header className="test-card-header">
        <h3>Medium Spacing</h3>
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <Card spacing="lg">
      <Card.Header className="test-card-header">
        <h3>Large Spacing</h3>
      </Card.Header>

      <Card.Section>
        <p>
          The term can refer to the flowering plant as a whole, even when not in bloom, and not just
          the flower.
        </p>
      </Card.Section>
    </Card>

    <style>{sharedStyles}</style>
  </div>
)
