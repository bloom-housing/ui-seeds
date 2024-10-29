import React from "react"
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

export const Default = () => <FormErrorMessage>Looks like you made a mistake.</FormErrorMessage>

const DocsStyle = () => (
  <style>
    {
      ".story-input { border: 1px solid var(--seeds-color-alert); padding: var(--seeds-s2) var(--seeds-s3); border-radius: var(--seeds-rounded); }"
    }
  </style>
)

export const WithField = () => (
  <>
    <div>
      <input
        type="text"
        value="Invalid content"
        aria-describedby="example-error"
        className="story-input"
      />
    </div>
    <FormErrorMessage id="example-error">Error message</FormErrorMessage>
    <DocsStyle />
  </>
)
