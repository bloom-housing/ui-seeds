import React from "react"
import "./Card.scss"

export interface CardHeaderProps {
  /** An additional element(s) you can add to the side of the main child element(s) */
  suffix?: React.ReactNode
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
    <header id={props.id} className={classNames.join(" ")} data-flex-children={!!props.suffix}>
      {props.children}
      {props.suffix}
    </header>
  )
}

export interface CardSectionProps {
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
    <div id={props.id} className={classNames.join(" ")}>
      {props.children}
    </div>
  )
}

export interface CardFooterProps {
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
    <footer id={props.id} className={classNames.join(" ")}>
      {props.children}
    </footer>
  )
}

export interface CardProps {
  /** Add dividers between card elements */
  dividers?: "flush" | "inset"
  /** Control spacing around card elements
   * @default base
   */
  spacing?: "sm" | "base" | "md" | "lg"
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
    <article id={props.id} className={classNames.join(" ")} data-dividers={props.dividers} data-spacing={spacing}>
      {props.children}
    </article>
  )
}

Card.Header = CardHeader
Card.Section = CardSection
Card.Footer = CardFooter

export { Card as default, CardHeader, CardSection, CardFooter }
