import React, { useContext } from "react"
import {
  ExternalLinkScreenReaderText,
  NavigationContext,
  isExternalLink,
  shouldShowExternalLinkIcon,
} from "../global/NavigationContext"
import Icon from "../icons/Icon"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"

import "./Link.scss"

export interface LinkProps {
  /** Link content */
  children: React.ReactNode
  /** URL to link to */
  href: string
  /** Icon to show before the label text */
  leadIcon?: React.ReactNode
  /** Icon to show after the label text */
  tailIcon?: React.ReactNode
  /** Set to true if you don't want external links to show a related icon */
  hideExternalLinkIcon?: boolean
  /** Set external link target if it meets accessibility criteria */
  newWindowTarget?: boolean
  /** Set to true to hide the link from the accessibility tree */
  ariaHidden?: boolean
  /** Accessible label if link doesn't contain text content */
  ariaLabel?: string
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const Link = (props: LinkProps) => {
  const classNames = ["seeds-link"]

  const tailIcon = shouldShowExternalLinkIcon(props) ? (
    <Icon>
      <ArrowTopRightOnSquareIcon />
    </Icon>
  ) : (
    props.tailIcon
  )

  if (props.className) classNames.push(props.className)
  if (props.leadIcon) classNames.push("has-lead-icon")
  if (tailIcon) classNames.push("has-tail-icon")

  let additionalProps: { [key: string]: unknown } = {
    id: props.id,
    className: classNames.join(" "),
    "aria-label": props.ariaLabel,
    "aria-hidden": props.ariaHidden,
  }

  if (props.newWindowTarget) {
    additionalProps = { ...additionalProps, target: "_blank", rel: "noreferrer" }
  }

  const { LinkComponent } = useContext(NavigationContext)

  if (props.href && isExternalLink(props.href)) {
    return (
      <a href={props.href} {...additionalProps}>
        {props.leadIcon}
        {props.children}
        {tailIcon}
        {props.newWindowTarget && <ExternalLinkScreenReaderText />}
      </a>
    )
  } else {
    return (
      <LinkComponent href={props.href} {...additionalProps}>
        {props.leadIcon}
        {props.children}
        {tailIcon}
      </LinkComponent>
    )
  }
}

export default Link
