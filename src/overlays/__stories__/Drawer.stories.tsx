import React, { useState } from "react"
import Drawer, { DrawerFooter } from "../Drawer"
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
      <Drawer isOpen={isOpen} heading={"Heading"} onClose={() => setIsOpen(false)}>
        <CardExample />
        <DrawerFooter>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const ManyButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} heading={"Heading"} onClose={() => setIsOpen(false)}>
        <CardExample />
        <DrawerFooter>
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
        </DrawerFooter>
      </Drawer>
    </>
  )
}

export const OverflowingContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <Drawer isOpen={isOpen} heading={"Heading"} onClose={() => setIsOpen(false)}>
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <DrawerFooter>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </DrawerFooter>
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
      <Drawer isOpen={isOpenFirst} heading={"Heading"} onClose={() => setIsOpenFirst(false)}>
        <CardExample />
        <DrawerFooter>
          <Button variant="primary" size="sm" onClick={() => setIsOpenSecond(true)}>
            Toggle Second Drawer
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </DrawerFooter>
      </Drawer>
      <Drawer
        isOpen={isOpenSecond}
        heading={"Heading"}
        onClose={() => setIsOpenSecond(false)}
        nested={true}
      >
        <CardExample />
        <DrawerFooter>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  )
}
