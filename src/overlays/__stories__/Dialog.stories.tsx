import React, { useState } from "react"
import Dialog from "../Dialog"
import Button from "../../actions/Button"

import MDXDocs from "./Drawer.docs.mdx"

export default {
  title: "Overlays/Dialog",
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
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Header closeButtonLast onClose={() => setIsOpen(false)}>
          Heading
        </Dialog.Header>
        <Dialog.Content>
          <p>Hello, I am content.</p>
          <p>This is very good.</p>
        </Dialog.Content>
        <Dialog.Footer>
          <Button variant="primary" size="sm">
            Primary Button
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}