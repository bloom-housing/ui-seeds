import React, { useContext } from "react"
import {
  NavigationContext,
  isExternalLink,
  shouldShowExternalLinkIcon,
} from "../global/NavigationContext"
import Icon from "../icons/Icon"

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import "./Button.scss"

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode
  /** Appearance of the component */
  variant?:
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "secondary-outlined"
    | "alert"
    | "alert-outlined"
    | "highlight"
    | "highlight-outlined"
    | "text"
  /** Button size */
  size?: "sm" | "md" | "lg"
  /** Icon to show before the label text */
  leadIcon?: React.ReactNode
  /** Icon to show after the label text */
  tailIcon?: React.ReactNode
  /** Set to true if you don't want external links to show a related icon */
  hideExternalLinkIcon?: boolean
  /** Event handler for the button click */
  onClick?: (e: React.MouseEvent) => void
  /** Use an `<a href>` tag instead of `<button>` for a hyperlink */
  href?: string
  /** HTML button type */
  type?: "button" | "submit" | "reset"
  /** Set to true to disable the button */
  disabled?: boolean
  /** Set to true to hide the button from the accessibility tree */
  ariaHidden?: boolean
  /** Accessible label if button doesn't contain text content */
  ariaLabel?: string
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const setupButtonProps = (props: ButtonProps) => {
  const classNames = ["seeds-button"]

  const tailIcon = shouldShowExternalLinkIcon(props) ? (
    <Icon icon={faArrowUpRightFromSquare} />
  ) : (
    props.tailIcon
  )

  if (props.className) classNames.push(props.className)
  if (props.leadIcon) classNames.push("has-lead-icon")
  if (tailIcon) classNames.push("has-tail-icon")

  return {
    updatedProps: {
      "data-variant": props.variant || "primary",
      "data-size": props.size || "md",
      id: props.id,
      className: classNames.join(" "),
      "aria-label": props.ariaLabel,
      "aria-hidden": props.ariaHidden,
      tabIndex: props.ariaHidden ? -1 : null,
    },
    inner: {
      leadIcon: props.leadIcon,
      tailIcon,
      children: props.children,
    },
  }
}

const ButtonElement = (props: ButtonProps) => {
  return <button {...props} />
}

const LinkButton = (props: ButtonProps) => {
  if (props.href && isExternalLink(props.href)) {
    return <a target="_blank" {...props} />
  } else {
    const { LinkComponent } = useContext(NavigationContext)
    return <LinkComponent {...props} />
  }
}

const Button = (props: ButtonProps) => {
  const { updatedProps, inner } = setupButtonProps(props)

  const buttonInner = (
    <>
      {inner.leadIcon}
      {inner.children}
      {inner.tailIcon}
    </>
  )

  if (props.href) {
    return (
      <LinkButton href={props.href} {...updatedProps}>
        {buttonInner}
      </LinkButton>
    )
  } else {
    return (
      <ButtonElement
        type={props.type || "button"}
        disabled={props.disabled}
        onClick={props.onClick}
        {...updatedProps}
      >
        {buttonInner}
      </ButtonElement>
    )
  }
}

export default Button
