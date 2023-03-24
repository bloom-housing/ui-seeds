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
    <Toast>A basic toast</Toast>
    <Toast variant="secondary">An alert with a secondary style</Toast>
    <Toast variant="success">An alert with a success style</Toast>
  </>
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
