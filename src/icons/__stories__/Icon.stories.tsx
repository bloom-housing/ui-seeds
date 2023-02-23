import React from "react"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import Icon from "../Icon"

import MDXDocs from "./Icon.docs.mdx"

export default {
  title: "Icons/Icon",
  component: Icon,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const icons = () => (
  <>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faCoffee} /> Coffee
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faStar} /> Star
    </div>
    <div style={{ fontSize: "1.5em" }}>
      <Icon icon={faUser} /> User
    </div>
  </>
)

export const containerBasedSizes = () => (
  <>
    <div style={{ fontSize: "var(--bloom-font-size-sm)" }}>
      <Icon icon={faStar} /> Star
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-lg)" }}>
      <Icon icon={faStar} /> Star
    </div>
    <div style={{ fontSize: "var(--bloom-font-size-2xl)" }}>
      <Icon icon={faStar} /> Star
    </div>
  </>
)

export const presetSizes = () => (
  <>
    <div>
      <Icon icon={faStar} size={"utility-sm"} /> Star (utility-sm)
    </div>
    <div>
      <Icon icon={faStar} size={"utility-md"} /> Star (utility-md)
    </div>
    <div>
      <Icon icon={faStar} size={"badge-lg"} /> Star (badge-lg)
    </div>
    <div>
      <Icon icon={faStar} size={"badge-xl"} /> Star (badge-xl)
    </div>
  </>
)
