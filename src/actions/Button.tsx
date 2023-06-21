import React, { useContext } from "react"
import { NavigationContext } from "../global/NavigationContext"

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
    | "borderless"
    | "link"
  size?: "sm" | "md" | "lg"
  leadIcon?: React.ReactNode
  tailIcon?: React.ReactNode
  href?: string
  loading?: boolean
  onClick?: (e: React.MouseEvent) => void
  type?: "button" | "submit" | "reset"
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const setupButtonProps = (props: ButtonProps) => {
  const classNames = ["button"]
  if (props.className) classNames.push(props.className)

  return {
    ...props,
    "data-variant": props.variant,
    "data-size": props.size,
    className: classNames.join(" "),
    type: props.type || "submit",
  }
}

const ButtonElement = (props: ButtonProps) => {
  const updatedProps = setupButtonProps(props)

  return <button {...updatedProps}>{props.children}</button>
}

const LinkButton = (props: ButtonProps) => {
  const updatedProps = setupButtonProps(props)

  if (props.href && isExternalLink(props.href)) {
    updatedProps.tailIcon = "tab"
    return <a href={props.href} {...updatedProps}>{props.children}</a>
  } else {
    const { LinkComponent } = useContext(NavigationContext)
    return <LinkComponent href={props.href} {...updatedProps}>{props.children}</LinkComponent>
  }
}

const Button = (props: ButtonProps) => {
  const buttonInner = <>
    {props.leadIcon}
    {props.children}
    {props.tailIcon}
  </>

  if (props.href) {
    return <LinkButton {...props}>{buttonInner}</LinkButton>
  } else {
    return <ButtonElement {...props}>{buttonInner}</ButtonElement>
  }
}

export default Button
