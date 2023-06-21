import React, { useContext } from "react"
import { NavigationContext } from "../global/NavigationContext"
import Icon from "../icons/Icon"

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import "./Button.scss"

export const isExternalLink = (href: string) => {
  return href.startsWith("http://") || href.startsWith("https://")
}

export const isInternalLink = (href: string) => {
  return href.startsWith("/") && !href.startsWith("//")
}

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
    | "highlight" // or accent?
    | "highlight-outlined" // or accent?
    | "borderless-text"
  /** Button size */
  size?: "sm" | "md" | "lg"
  /** Icon to show before the label text */
  leadIcon?: React.ReactNode
  /** Icon to show after the label text */
  tailIcon?: React.ReactNode
  /** Event handler for the button click */
  onClick?: (e: React.MouseEvent) => void
  /** Use an `<a href>` tag instead of `<button>` for a hyperlink */
  href?: string
  /** HTML button type */
  type?: "button" | "submit" | "reset"
  /** Set to true to disable the button */
  disabled?: boolean
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const setupButtonProps = (props: ButtonProps) => {
  const classNames = ["button"]

  const tailIcon =
    props.href && isExternalLink(props.href) ? (
      <Icon icon={faArrowUpRightFromSquare} />
    ) : (
      props.tailIcon
    )

  if (props.className) classNames.push(props.className)
  if (props.leadIcon) classNames.push("has-lead-icon")
  if (tailIcon) classNames.push("has-tail-icon")

  return {
    ...props,
    "data-variant": props.variant || "primary",
    "data-size": props.size,
    className: classNames.join(" "),
    type: props.type || "button",
    tailIcon,
  }
}

const ButtonElement = (props: ButtonProps) => {
  return <button {...props} />
}

const LinkButton = (props: ButtonProps) => {
  if (props.href && isExternalLink(props.href)) {
    return (
      <a href={props.href} target="_blank" {...props}>
        {props.children}
      </a>
    )
  } else {
    const { LinkComponent } = useContext(NavigationContext)
    return (
      <LinkComponent href={props.href} {...props}>
        {props.children}
      </LinkComponent>
    )
  }
}

const Button = (props: ButtonProps) => {
  const updatedProps = setupButtonProps(props)

  const buttonInner = (
    <>
      {updatedProps.leadIcon}
      {updatedProps.children}
      {updatedProps.tailIcon}
    </>
  )

  delete updatedProps.leadIcon
  delete updatedProps.tailIcon

  if (updatedProps.href) {
    return <LinkButton {...updatedProps}>{buttonInner}</LinkButton>
  } else {
    return <ButtonElement {...updatedProps}>{buttonInner}</ButtonElement>
  }
}

export default Button
