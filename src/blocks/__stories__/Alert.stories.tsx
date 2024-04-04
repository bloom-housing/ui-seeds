import React from "react"
import { Story } from "@storybook/react"

import Alert from "../Alert"
import Icon from "../../icons/Icon"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

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

export const defaultAlert = () => <Alert>Primary alert</Alert>

export const standardVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Alert variant="primary">Primary alert</Alert>
    <Alert variant="success">Success alert</Alert>
    <Alert variant="warn">Warning alert</Alert>
    <Alert variant="alert">Alert alert</Alert>
    <Alert variant="secondary">Secondary alert</Alert>
  </div>
)

export const inverseVariants = () => (
  <div style={{ display: "grid", gap: "var(--seeds-s3)" }}>
    <Alert variant="primary-inverse">Primary alert</Alert>
    <Alert variant="success-inverse">Success alert</Alert>
    <Alert variant="warn-inverse">Warning alert</Alert>
    <Alert variant="alert-inverse">Alert alert</Alert>
    <Alert variant="secondary-inverse">Secondary alert</Alert>
  </div>
)

export const withCustomIcon = () => (
  <Alert variant="success" customIcon={<Icon icon={faHouseChimney} />}>
    A custom icon (house-chimney)
  </Alert>
)

export const withLink = () => (
  <Alert variant="primary-inverse" customIcon>
    Just wanted to let you know <a href="#">You can click on me</a>
  </Alert>
)

export const wideContainerLayout = () => (
  <>
    <Alert id="in-container" variant="alert" fullwidth onClose={() => alert("Closing!")}>
      An alert that scales to full container width
    </Alert>

    <style>
      {`
      #in-container {
        --alert-max-width: var(--seeds-width-4xl);
      }
      `}
    </style>
  </>
)
