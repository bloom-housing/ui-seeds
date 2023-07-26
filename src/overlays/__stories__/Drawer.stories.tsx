import React, { useState } from "react"
import Drawer from "../Drawer"
import Card from "../../blocks/Card"
import Button from "../../actions/Button"

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

const CardExample = () => {
  return (
    <Card>
      <Card.Header className="test-card-header">
        <Heading size="2xl">Wildflower</Heading>
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
  )
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header closeButtonLast onClose={() => setIsOpen(false)}>
          Heading
        </Drawer.Header>
        <Drawer.Content>
          <CardExample />
        </Drawer.Content>
        <Drawer.Footer>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export const ManyButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header onClose={() => setIsOpen(false)}>
          Heading
        </Drawer.Header>
        
        <div className="seeds-drawer-content">
          <CardExample />
        </div>
        <Drawer.Footer>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export const OverflowingContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header onClose={() => setIsOpen(false)}>
          Heading
        </Drawer.Header>
        <Drawer.Content>
          <CardExample />
          <CardExample />
          <CardExample />
          <CardExample />
        </Drawer.Content>
        <Drawer.Footer>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}

export const Nested = () => {
  const [isOpenFirst, setIsOpenFirst] = useState(false)
  const [isOpenSecond, setIsOpenSecond] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpenFirst(!isOpenFirst)}>Toggle Drawer</button>
      <Drawer isOpen={isOpenFirst} onClose={() => setIsOpenFirst(false)}>
        <Drawer.Header onClose={() => setIsOpenFirst(false)}>
          Heading
        </Drawer.Header>
        <Drawer.Content>
          <CardExample />
        </Drawer.Content>
        <Drawer.Footer>
          <Button variant="primary" size="sm" onClick={() => setIsOpenSecond(true)}>
            Toggle Second Drawer
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Drawer.Footer>
      </Drawer>
      <Drawer
        isOpen={isOpenSecond}
        onClose={() => setIsOpenSecond(false)}
        nested={true}
      >
        <Drawer.Header onClose={() => setIsOpenSecond(false)}>
          Heading
        </Drawer.Header>
        <Drawer.Content>
          <CardExample />
        </Drawer.Content>
        <Drawer.Footer>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  )
}
