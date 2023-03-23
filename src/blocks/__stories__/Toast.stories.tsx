import React, { useState } from "react"
import { Story } from "@storybook/react"

import Toast from "../Toast"

export default {
  title: "Blocks/Toast",
  component: Toast,
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
      <button onClick={() => showSuccess(!success)}>Show Success Toast</button>
      <button onClick={() => showWarning(!warning)}>Show Warn Toast</button>
      {success && <Toast variant="success">Success message!</Toast>}
      {warning && <Toast variant="warn">Warn message!</Toast>}
    </>
  )
}
