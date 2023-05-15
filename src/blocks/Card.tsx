import React from "react"
import "./Card.scss"

export interface CardHeaderProps {
  /** Add divider between this and the next element */
  divider?: "flush" | "inset"
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardHeader = (props: CardHeaderProps) => {
  const classNames = ["card-header"]
  if (props.className) classNames.push(props.className)

  return (
    <header id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </header>
  )
}

export interface CardSectionProps {
  /** Add divider between this and the next element */
  divider?: "flush" | "inset"
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardSection = (props: CardSectionProps) => {
  const classNames = ["card-section"]
  if (props.className) classNames.push(props.className)

  return (
    <div id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </div>
  )
}

export interface CardFooterProps {
  /** Add divider between this and the next element */
  divider?: "flush" | "inset"
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardFooter = (props: CardFooterProps) => {
  const classNames = ["card-footer"]
  if (props.className) classNames.push(props.className)

  return (
    <footer id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </footer>
  )
}

export interface CardProps {
  /** Control spacing around card elements
   * @default base
   */
  spacing?: "sm" | "base" | "md" | "lg" | "none"
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  const classNames = ["card"]
  const spacing = props.spacing || "base"
  if (props.className) classNames.push(props.className)

  return (
    <article id={props.id} className={classNames.join(" ")} data-spacing={spacing}>
      {props.children}
    </article>
  )
}

Card.Header = CardHeader
Card.Section = CardSection
Card.Footer = CardFooter

export { Card as default, CardHeader, CardSection, CardFooter }
