import React, { useContext } from "react"
import { NavigationContext } from "../global/NavigationContext"

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
    | "highlight"
    | "highlight-outlined"
    | "borderless"
    | "link"
  size?: "sm" | "md" | "lg"
  leadIcon?: React.ReactNode
  tailIcon?: React.ReactNode
  href?: string
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
}

const setupButtonProps = (props: ButtonProps) => {
  const classNames = ["button"]
  if (props.className) classNames.push(props.className)

  return {
    className: classNames.join(" ")
  }
}

const ButtonElement = (props: ButtonProps) => {
  const updatedProps = setupButtonProps(props)

  return <button {...updatedProps}>{props.children}</button>
}

const LinkButton = (props: ButtonProps) => {
  const updatedProps = setupButtonProps(props)

  if (props.href && isExternalLink(props.href)) {
    return <a href={props.href} {...updatedProps}>{props.children}</a>
  } else {
    const { LinkComponent } = useContext(NavigationContext)
    return <LinkComponent href={props.href} {...updatedProps}>{props.children}</LinkComponent>
  }
}

const Button = (props: ButtonProps) => {
  const buttonInner = <>{props.children}</>

  if (props.href) {
    return <LinkButton {...props}>{buttonInner}</LinkButton>
  } else {
    return <ButtonElement {...props}>{buttonInner}</ButtonElement>
  }
}
