import React, { useContext, PropsWithChildren } from "react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import {
  NavigationContext,
  ExternalLinkScreenReaderText,
  isExternalLink,
  shouldShowExternalLinkIcon,
} from "../global/NavigationContext"
import { SeedsColorOutlinedVariants, SeedsColorVariants, SeedsSizes } from "../global/sharedTypes"
import Icon from "../icons/Icon"
import "./Button.scss"

export type ButtonVariant = SeedsColorVariants | SeedsColorOutlinedVariants | "text"

export type ButtonSize = Extract<SeedsSizes, "sm" | "md" | "lg">

export type ButtonType = "button" | "submit" | "reset"

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode
  /** Appearance of the component */
  variant?: ButtonVariant
  /** Button size (only `sm`/`md` supported by `text` variant) */
  size?: ButtonSize
  /** Icon to show before the label text */
  leadIcon?: React.ReactNode
  /** Icon to show after the label text */
  tailIcon?: React.ReactNode
  /** Set to true if you don't want external links to show a related icon */
  hideExternalLinkIcon?: boolean
  /** Event handler for the button click */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /** Use an `<a href>` tag instead of `<button>` for a hyperlink */
  href?: string
  /** Set external link target if it meets accessibility criteria */
  newWindowTarget?: boolean
  /** HTML button type */
  type?: ButtonType
  /** Set to true to disable the button */
  disabled?: boolean
  /** Set to true to hide the button from the accessibility tree */
  ariaHidden?: boolean
  /** Accessible label if button doesn't contain text content */
  ariaLabel?: string
  /** The ID of an element you're expanding/collapsing as indicated by `ariaExpanded` */
  ariaControls?: string
  /** The expanded or collapsed state of the element whose ID is specified via `ariaControls` */
  ariaExpanded?: boolean
  /** Show loading spinner and set ARIA live message while disabling clicks */
  loadingMessage?: string | null
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Additional native button props not explicitly included */
  nativeButtonProps?: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
  /** Additional native anchor props not explicitly included */
  nativeLinkProps?: PropsWithChildren<React.LinkHTMLAttributes<HTMLAnchorElement>>
}

// Extended interface for Link buttons
export interface ButtonPropsWithTarget extends Omit<ButtonProps, "onClick"> {
  target?: string
}

const setupButtonProps = (props: ButtonProps) => {
  const classNames = ["seeds-button"]

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

  return {
    updatedProps: {
      "data-variant": props.variant || "primary",
      "data-size": props.size || "md",
      "data-loading": props.loadingMessage ? "true" : undefined,
      id: props.id,
      className: classNames.join(" "),
      target: props.newWindowTarget ? "_blank" : undefined,
      "aria-label": props.ariaLabel,
      "aria-hidden": props.ariaHidden,
      "aria-controls": props.ariaControls,
      "aria-expanded": props.ariaExpanded,
      "aria-disabled": props.loadingMessage ? "true" : undefined,
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

const LinkButton = (props: ButtonPropsWithTarget) => {
  const { LinkComponent } = useContext(NavigationContext)

  if (props.href && isExternalLink(props.href)) {
    return (
      <a {...props} {...props.nativeLinkProps}>
        {props.children}
        {props.target === "_blank" && <ExternalLinkScreenReaderText />}
      </a>
    )
  } else {
    return <LinkComponent {...props} {...props.nativeLinkProps} />
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
        onClick={props.loadingMessage ? (event) => event.preventDefault : props.onClick}
        {...updatedProps}
        {...props.nativeButtonProps}
      >
        {buttonInner}
        <span className="seeds-screen-reader-only" aria-live="assertive">
          {props.loadingMessage}
        </span>
      </ButtonElement>
    )
  }
}

export default Button
