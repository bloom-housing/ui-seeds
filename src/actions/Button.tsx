import React, { useContext } from "react"
import { NavigationContext } from "../global/NavigationContext"

export const isExternalLink = (href: string) => {
  return href.startsWith("http://") || href.startsWith("https://")
}

export const isInternalLink = (href: string) => {
  return href.startsWith("/") && !href.startsWith("//")
}

const setupButtonProps = (props) => {
  const classNames = ["button"]
  if (props.className) classNames.push(props.className)

  return {
    className: classNames.join(" ")
  }
}

const ButtonElement = (props) => {
  const updatedProps = setupButtonProps(props)

  return <button {...updatedProps}>{props.children}</button>
}

const LinkButton = (props) => {
  const updatedProps = setupButtonProps(props)

  if (isExternalLink(props.href)) {
    return <a href={props.href} {...updatedProps}>{props.children}</a>
  } else {
    const { LinkComponent } = useContext(NavigationContext)
    return <LinkComponent href={props.href} {...updatedProps}>{props.children}</LinkComponent>
  }
}

const Button = (props) => {
  const buttonInner = <>{props.children}</>

  if (props.href) {
    return <LinkButton {...props}>{buttonInner}</LinkButton>
  } else {
    return <ButtonElement {...props}>{buttonInner}</ButtonElement>
  }
}
