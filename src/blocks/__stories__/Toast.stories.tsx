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
  <div style={{ display: "grid", gap: "var(--bloom-s3)" }}>
    <Toast variant="primary">Primary toast</Toast>
    <Toast variant="success">Success toast</Toast>
    <Toast variant="warn">Warning toast</Toast>
    <Toast variant="alert">Alert toast</Toast>
    <Toast variant="secondary">Secondary toast</Toast>
  </div>
)

export const inverseVariants = () => (
  <div style={{ display: "grid", gap: "var(--bloom-s3)" }}>
    <Toast variant="primary-inverse">Primary toast</Toast>
    <Toast variant="success-inverse">Success toast</Toast>
    <Toast variant="warn-inverse">Warning toast</Toast>
    <Toast variant="alert-inverse">Alert toast</Toast>
    <Toast variant="secondary-inverse">Secondary toast</Toast>
  </div>
)

export const showToasts = () => {
  const [success, showSuccess] = useState(false)
  const [warning, showWarning] = useState(false)

  return (
    <>
      <button onClick={() => showSuccess(!success)} style={{ background: "#f0f0f0" }}>
        {success ? "Remove" : "Show"} Success Toast
      </button>{" "}
      <button onClick={() => showWarning(!warning)} style={{ background: "#f0f0f0" }}>{warning ? "Remove" : "Show"} Warn Toast</button>
      {success && <Toast variant="success" hideTimeout={5000}>Success message!</Toast>}
      {warning && <Toast variant="warn" hideTimeout={5000}>Warn message!</Toast>}
    </>
  )
}
