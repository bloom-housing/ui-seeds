import React from "react"
import "./Card.scss"
import { SeedsSizes } from "../global/sharedTypes"

export type CardDivider = "flush" | "inset"

export interface CardHeaderProps {
  /** Add divider between this and the next element */
  divider?: CardDivider
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardHeader = (props: CardHeaderProps) => {
  const classNames = ["seeds-card-header"]
  if (props.className) classNames.push(props.className)

  return (
    <header id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </header>
  )
}

export interface CardSectionProps {
  /** Add divider between this and the next element */
  divider?: CardDivider
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardSection = (props: CardSectionProps) => {
  const classNames = ["seeds-card-section"]
  if (props.className) classNames.push(props.className)

  return (
    <div id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </div>
  )
}

export interface CardFooterProps {
  /** Add divider between this and the next element */
  divider?: CardDivider
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const CardFooter = (props: CardFooterProps) => {
  const classNames = ["seeds-card-footer"]
  if (props.className) classNames.push(props.className)

  return (
    <footer id={props.id} className={classNames.join(" ")} data-divider={props.divider}>
      {props.children}
    </footer>
  )
}

export type CardSpacing = Extract<SeedsSizes, "sm" | "md" | "lg" | "xl"> | "none"

export interface CardProps {
  /** Control spacing around card elements
   * @default md
   */
  spacing?: CardSpacing
  /** Element ID */
  id?: string
  /** Additional class name */
  className?: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  const classNames = ["seeds-card"]
  const spacing = props.spacing || "md"
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
