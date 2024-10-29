import React from "react"
import { HomeModernIcon } from "@heroicons/react/24/solid"
import Alert from "../Alert"
import Icon from "../../icons/Icon"
import MDXDocs from "./Alert.docs.mdx"

export default {
  title: "Blocks/Alert",
  component: Alert,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const Default = () => <Alert>Primary alert</Alert>

export const StandardVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Alert variant="primary">Primary alert</Alert>
    <Alert variant="success">Success alert</Alert>
    <Alert variant="warn">Warning alert</Alert>
    <Alert variant="alert">Alert alert</Alert>
    <Alert variant="secondary">Secondary alert</Alert>
  </div>
)

export const InverseVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Alert variant="primary-inverse">Primary alert</Alert>
    <Alert variant="success-inverse">Success alert</Alert>
    <Alert variant="warn-inverse">Warning alert</Alert>
    <Alert variant="alert-inverse">Alert alert</Alert>
    <Alert variant="secondary-inverse">Secondary alert</Alert>
  </div>
)

export const CustomIcon = () => (
  // import { Icon } from "@bloom-housing/ui-seeds"
  // import { HomeModernIcon } from "@heroicons/react/24/solid"
  <Alert
    variant="success"
    customIcon={
      <Icon size="md">
        <HomeModernIcon />
      </Icon>
    }
  >
    A custom icon (home-modern)
  </Alert>
)

export const Link = () => (
  <Alert variant="primary-inverse">
    Just wanted to let you know <a href="#">You can click on me</a>
  </Alert>
)

export const FullWidth = () => (
  <div>
    <Alert variant="alert" fullwidth onClose={() => alert("Closing!")}>
      An alert that scales to full container width
    </Alert>
    <style>{".seeds-alert { --alert-max-width: var(--seeds-width-4xl); }"}</style>
  </div>
)
