import React from "react"
import Card from "../Card"

//import MDXDocs from "./Card.docs.mdx"

export default {
  title: "Blocks/Card",
  component: Card,
}

export const TextContent = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header>
        <h3
          style={{
            fontFamily: "var(--bloom-font-serif)",
            fontWeight: "normal",
            fontSize: "var(--bloom-font-size-2xl)",
            lineHeight: "var(--bloom-line-height-heading)",
          }}
        >
          Wildflower
        </h3>
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
  </div>
)

export const FlushDividers = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card dividers="flush">
      <Card.Header>
        <h3
          style={{
            fontFamily: "var(--bloom-font-serif)",
            fontWeight: "normal",
            fontSize: "var(--bloom-font-size-2xl)",
            lineHeight: "var(--bloom-line-height-heading)",
          }}
        >
          Wildflower
        </h3>
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
  </div>
)

export const InsetDividers = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card dividers="inset">
      <Card.Header>
        <h3
          style={{
            fontFamily: "var(--bloom-font-serif)",
            fontWeight: "normal",
            fontSize: "var(--bloom-font-size-2xl)",
            lineHeight: "var(--bloom-line-height-heading)",
          }}
        >
          Wildflower
        </h3>
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
  </div>
)

export const WithFooter = () => (
  <div style={{ maxWidth: "500px" }}>
    <Card>
      <Card.Header>
        <h3
          style={{
            fontFamily: "var(--bloom-font-serif)",
            fontWeight: "normal",
            fontSize: "var(--bloom-font-size-2xl)",
            lineHeight: "var(--bloom-line-height-heading)",
          }}
        >
          Wildflower
        </h3>
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

    <style>{"#test-card-footer { --card-footer-background-color: var(--bloom-color-primary-lighter) }"}</style>
  </div>
)
