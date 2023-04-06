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
        <h3 style={{fontFamily: "var(--bloom-font-serif)", fontWeight: "normal", fontSize: "var(--bloom-font-size-2xl)"}}>I'm just a heading</h3>
      </Card.Header>

      <Card.Section>
        <p>Markdown styled content here.</p>

        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
      </Card.Section>

      <Card.Footer>
        <Card.Section>
          <p>Footer content here.</p>
        </Card.Section>
      </Card.Footer>
    </Card>
  </div>
)