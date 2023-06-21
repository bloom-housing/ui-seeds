import React from "react"
import { Story } from "@storybook/react"

import Button from "../Button"

//import MDXDocs from "./Alert.docs.mdx"

export default {
  title: "Actions/Button",
  component: Button,
  // parameters: {
  //   docs: {
  //     page: MDXDocs,
  //   },
  // },
}

export const defaultButton = () => <Button>Default Button</Button>

export const buttonVariants = () => (
  <>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <style>{".button { margin: .25rem }"}</style>
  </>
)
