import React, { useState } from "react"
import { Story } from "@storybook/react"

import Toast from "../Toast"

import MDXDocs from "./Toast.docs.mdx"

export default {
  title: "Blocks/Toast",
  component: Toast,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const toasts = () => (
  <>
    <Toast>Primary toast</Toast>
  </>
)

export const standardVariants = () => (
  <>
    <Toast variant="primary">Primary toast</Toast>
    <Toast variant="success">Success toast</Toast>
    <Toast variant="warn">Warning toast</Toast>
    <Toast variant="alert">Alert toast</Toast>
    <Toast variant="secondary">Secondary toast</Toast>
  </>
)

export const inverseVariants = () => (
  <>
    <Toast variant="primary-inverse">Primary toast</Toast>
    <Toast variant="success-inverse">Success toast</Toast>
    <Toast variant="warn-inverse">Warning toast</Toast>
    <Toast variant="alert-inverse">Alert toast</Toast>
    <Toast variant="secondary-inverse">Secondary toast</Toast>
  </>
)

export const showToasts = () => {
  const [success, showSuccess] = useState(false)
  const [warning, showWarning] = useState(false)

  return (
    <>
      <label>
        <input type="checkbox" onChange={() => showSuccess(!success)} /> Success Toast
      </label>{" "}
      <label>
        <input type="checkbox" onClick={() => showWarning(!warning)} /> Warn Toast
      </label>
      <p>(they'll disappear after a few seconds)</p>
      {success && (
        <Toast variant="success" hideTimeout={5000}>
          Success message!
        </Toast>
      )}
      {warning && (
        <Toast variant="warn" hideTimeout={5000}>
          Warn message!
        </Toast>
      )}
    </>
  )
}
