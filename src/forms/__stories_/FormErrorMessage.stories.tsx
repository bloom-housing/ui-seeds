import React from "react"
import { Story } from "@storybook/react"

import FormErrorMessage from "../FormErrorMessage"

import MDXDocs from "./FormErrorMessage.docs.mdx"

export default {
  title: "Forms/FormErrorMessage",
  component: FormErrorMessage,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const errorMessage = () => (
  <FormErrorMessage>Looks like you made a mistake.</FormErrorMessage>
)

export const singleFieldError = () => (
  <>
    <div>
      <input
        type="text"
        value="Invalid content"
        aria-describedby="example-error"
        style={{
          border: "1px solid var(--bloom-color-alert)",
          padding: "var(--bloom-s2) var(--bloom-s3)",
          borderRadius: "var(--bloom-rounded)",
        }}
      />
    </div>
    <FormErrorMessage id="example-error">Error message</FormErrorMessage>
  </>
)
