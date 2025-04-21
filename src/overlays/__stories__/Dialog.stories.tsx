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

export const FullWidthVideo = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dialog</button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        ariaLabelledBy="video"
        ariaDescribedBy="video-details"
        className={"custom-class-dialog"}
      >
        <Dialog.Header id="video">Video dialog</Dialog.Header>
        <Dialog.Content id="video-details" className={"custom-class-video-content"}>
          <div className={"custom-class-video-wrapper"}>
            <iframe
              title={"Label"}
              src={"https://www.youtube.com/embed/UF3d34a6kqg?si=-uP6h3edIPS2INQE"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={"custom-class-video"}
            />
          </div>
        </Dialog.Content>
      </Dialog>
      <style>
        {
          ".custom-class-dialog {  --overlay-padding: 0; --overlay-border-color: none; --dialog-width: var(--seeds-width-3xl); }"
        }
      </style>
      <style>{".custom-class-video-content { height: 100%; display: contents;}"}</style>
      <style>
        {
          ".custom-class-video-wrapper { aspect-ratio: 16 / 9 auto; width: 100%; overflow: hidden; max-height: 80vh;}"
        }
      </style>
      <style>{".custom-class-video { width: 100%; height: 100%; border: 0;}"}</style>
    </>
  )
}
