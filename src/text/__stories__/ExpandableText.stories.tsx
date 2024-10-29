import * as React from "react"
import { ExpandableText } from "../ExpandableText"
import MDXDocs from "./ExpandableText.docs.mdx"

export default {
  title: "Text/Expandable Text",
  component: ExpandableText,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

const longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const standard = () => (
  <ExpandableText strings={{ readMore: "More", readLess: "Less" }}>{longText}</ExpandableText>
)
export const expanded = () => (
  <ExpandableText strings={{ readMore: "More", readLess: "Less" }} expand={true}>
    {longText}
  </ExpandableText>
)
export const noExpansion = () => (
  <ExpandableText strings={{ readMore: "More", readLess: "Less" }}>Short text</ExpandableText>
)
export const html = () => (
  <ExpandableText
    strings={{ readMore: "More", readLess: "Less" }}
  >{`Go to <a href="http://www.google.com" target="_blank">Google</a>. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}</ExpandableText>
)
export const disableRawHtml = () => (
  <ExpandableText
    strings={{ readMore: "More", readLess: "Less" }}
    markdownProps={{ disableParsingRawHTML: true }}
  >{`Go to <a href="http://www.google.com" target="_blank">Google</a>. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}</ExpandableText>
)

export const buttonClassName = () => (
  <>
    <ExpandableText strings={{ readMore: "More", readLess: "Less" }} buttonClassName="custom-class">
      {longText}
    </ExpandableText>
    <style>{".custom-class { font-weight: bold; }"}</style>
  </>
)
