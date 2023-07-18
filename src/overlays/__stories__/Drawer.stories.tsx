import React, { useState } from "react"
import Drawer from "../Drawer"
import Card from "../../blocks/Card"

import MDXDocs from "./Drawer.docs.mdx"
import Heading from "../../text/Heading"

export default {
  title: "Overlays/Drawer",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} heading={"Heading"} onClose={() => setIsOpen(false)}>
        <Card>
          <Card.Header className="test-card-header">
            <Heading size="2xl">Wildflower</Heading>
          </Card.Header>

          <Card.Section>
            <p>
              A flower that grows in the wild, meaning it was not intentionally seeded or planted.
              The term implies that the plant probably is neither a hybrid nor a selected cultivar
              that is in any way different from the way it appears in the wild as a native plant.
              even if it is growing where it would not naturally.
            </p>
          </Card.Section>

          <Card.Section>
            <p>
              The term can refer to the flowering plant as a whole, even when not in bloom, and not
              just the flower.
            </p>
          </Card.Section>
        </Card>
      </Drawer>
    </>
  )
}
