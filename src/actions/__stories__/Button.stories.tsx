import React from "react"

import Button from "../Button"

import Icon from "../../icons/Icon"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import MDXDocs from "./Button.docs.mdx"
import HeadingGroup from "../../text/HeadingGroup"

export default {
  title: "Actions/Button",
  component: Button,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const defaultButton = () => <Button onClick={() => alert("Clicked!")}>Default Button</Button>

export const buttonVariants = () => (
  <>
    <HeadingGroup size="2xl" heading="sm" subheading="Small Size" />
    <div style={{ marginTop: "1rem" }}>
      <Button variant="primary" size="sm">
        Primary Button
      </Button>
      <Button variant="secondary" size="sm">
        Secondary Button
      </Button>
      <Button variant="alert" size="sm">
        Alert Button
      </Button>
      <Button variant="highlight" size="sm">
        Highlight Button
      </Button>
      <Button size="sm" disabled onClick={() => alert("won't work")}>
        Disabled Button
      </Button>
    </div>
    <div style={{ marginBottom: "2rem" }}>
      <Button variant="primary-outlined" size="sm">
        Primary Button
      </Button>
      <Button variant="secondary-outlined" size="sm">
        Secondary Button
      </Button>
      <Button variant="alert-outlined" size="sm">
        Alert Button
      </Button>
      <Button variant="highlight-outlined" size="sm">
        Highlight Button
      </Button>
      <Button variant="primary-outlined" size="sm" disabled onClick={() => alert("won't work")}>
        Disabled Button
      </Button>
    </div>
    <HeadingGroup size="2xl" heading="md" subheading="Medium Size" />
    <div style={{ marginTop: "1rem" }}>
      <Button variant="primary" size="md">
        Primary Button
      </Button>
      <Button variant="secondary" size="md">
        Secondary Button
      </Button>
      <Button variant="alert" size="md">
        Alert Button
      </Button>
      <Button variant="highlight" size="md">
        Highlight Button
      </Button>
      <Button size="md" disabled>
        Disabled Button
      </Button>
    </div>
    <div style={{ marginBottom: "2rem" }}>
      <Button variant="primary-outlined" size="md">
        Primary Button
      </Button>
      <Button variant="secondary-outlined" size="md">
        Secondary Button
      </Button>
      <Button variant="alert-outlined" size="md">
        Alert Button
      </Button>
      <Button variant="highlight-outlined" size="md">
        Highlight Button
      </Button>
      <Button variant="primary-outlined" size="md" disabled>
        Disabled Button
      </Button>
    </div>
    <HeadingGroup size="2xl" heading="lg" subheading="Large Size" />
    <div style={{ marginTop: "1rem" }}>
      <Button variant="primary" size="lg">
        Primary Button
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      <Button variant="alert" size="lg">
        Alert Button
      </Button>
      <Button variant="highlight" size="lg">
        Highlight Button
      </Button>
      <Button size="lg" disabled>
        Disabled Button
      </Button>
    </div>
    <div>
      <Button variant="primary-outlined" size="lg">
        Primary Button
      </Button>
      <Button variant="secondary-outlined" size="lg">
        Secondary Button
      </Button>
      <Button variant="alert-outlined" size="lg">
        Alert Button
      </Button>
      <Button variant="highlight-outlined" size="lg">
        Highlight Button
      </Button>
      <Button variant="primary-outlined" size="lg" disabled>
        Disabled Button
      </Button>
    </div>
    <style>{".seeds-button { margin: .25rem }"}</style>
  </>
)

export const linkButtons = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button href="/test">Internal Link</Button>
    <Button href="https://www.exygy.com" hideExternalLinkIcon>
      External Link (Same Window)
    </Button>
    <Button href="https://www.exygy.com" newWindowTarget>
      External Link (New Window)
    </Button>
  </div>
)

export const buttonsWithIcons = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button leadIcon={<Icon icon={faHeart} />}>Lead Icon</Button>
    <Button tailIcon={<Icon icon={faHeart} />}>Tail Icon</Button>
  </div>
)

export const textButtons = () => (
  <>
    <div style={{ display: "flex", gap: "1rem", marginBlockEnd: "1rem" }}>
      <Button variant="text">
        Medium Size
      </Button>
      <Button variant="text" size="sm">
        Small Size
      </Button>
    </div>
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="text" leadIcon={<Icon icon={faHeart} />}>
        Lead Icon
      </Button>
      <Button variant="text" tailIcon={<Icon icon={faHeart} />}>
        Tail Icon
      </Button>
    </div>

  </>
)

export const loadingButton = () => {
  const [loading, setLoading] = React.useState<undefined | string>()
  return <Button loadingSpinnerMessage={loading} onClick={() => setLoading("Saving form")}>Click to Spin</Button>
}
