import React, { useState } from "react"
import Dialog from "../Dialog"
import Button from "../../actions/Button"

import MDXDocs from "./Dialog.docs.mdx"

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
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dialog</button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        ariaLabelledBy="conf-needed"
        ariaDescribedBy="conf-details"
      >
        <Dialog.Header id="conf-needed">Confirmation needed</Dialog.Header>
        <Dialog.Content id="conf-details">
          <p>An email has been sent to you@email.com</p>
          <p>
            Please click on the link in the email we sent you in order to complete account creation.
          </p>
        </Dialog.Content>
        <Dialog.Footer>
          <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
            OK
          </Button>
          <Button variant="secondary-outlined" size="sm" onClick={() => setIsOpen(false)}>
            Resend the email
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}

export const OverflowingContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dialog</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Header>Confirmation needed</Dialog.Header>
        <Dialog.Content>
          <p>An email has been sent to you@email.com</p>
          <p>
            Please click on the link in the email we sent you in order to complete account creation.
          </p>
          <p>
            A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
            term implies that the plant probably is neither a hybrid nor a selected cultivar that is
            in any way different from the way it appears in the wild as a native plant, even if it
            is growing where it would not naturally.
          </p>
          <p>
            A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
            term implies that the plant probably is neither a hybrid nor a selected cultivar that is
            in any way different from the way it appears in the wild as a native plant, even if it
            is growing where it would not naturally.
          </p>
          <p>
            A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
            term implies that the plant probably is neither a hybrid nor a selected cultivar that is
            in any way different from the way it appears in the wild as a native plant, even if it
            is growing where it would not naturally.
          </p>
          <p>
            A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
            term implies that the plant probably is neither a hybrid nor a selected cultivar that is
            in any way different from the way it appears in the wild as a native plant, even if it
            is growing where it would not naturally.
          </p>
          <p>
            A flower that grows in the wild, meaning it was not intentionally seeded or planted. The
            term implies that the plant probably is neither a hybrid nor a selected cultivar that is
            in any way different from the way it appears in the wild as a native plant, even if it
            is growing where it would not naturally.
          </p>
        </Dialog.Content>
        <Dialog.Footer>
          <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
            OK
          </Button>
          <Button variant="secondary-outlined" size="sm" onClick={() => setIsOpen(false)}>
            Resend the email
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  )
}
