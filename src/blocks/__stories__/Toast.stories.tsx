import React, { useState } from "react"
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

export const Default = () => (
  <>
    <Toast>Primary toast</Toast>
  </>
)

export const StandardVariants = () => (
  <>
    <Toast variant="primary">Primary toast</Toast>
    <Toast variant="success">Success toast</Toast>
    <Toast variant="warn">Warning toast</Toast>
    <Toast variant="alert">Alert toast</Toast>
    <Toast variant="secondary">Secondary toast</Toast>
  </>
)

export const InverseVariants = () => (
  <>
    <Toast variant="primary-inverse">Primary toast</Toast>
    <Toast variant="success-inverse">Success toast</Toast>
    <Toast variant="warn-inverse">Warning toast</Toast>
    <Toast variant="alert-inverse">Alert toast</Toast>
    <Toast variant="secondary-inverse">Secondary toast</Toast>
  </>
)

export const TimeoutToasts = () => {
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
      <p>(Toasts will dismiss after 5 seconds)</p>
      {success && (
        <Toast variant="success" hideTimeout={5000}>
          Success message!
        </Toast>
      )}
      {warning && (
        <Toast variant="warn" hideTimeout={5000}>
          Warn message! (And with some longer text inside the toast)
        </Toast>
      )}
    </>
  )
}
