import React from "react"

import "./Grid.scss"

export interface GridCellProps {
  children: React.ReactNode
  id?: string
  className?: string
}

const GridCell = (props: GridProps) => {
  const classNames = ["grid-cell"]
  if (props.className) classNames.push(props.className)

  return <div id={props.id} className={classNames.join(" ")} role="gridcell">{props.children}</div>
}

export interface GridRowProps extends GridCellProps {
  columns?: number | string
}

const GridRow = (props: GridRowProps) => {
  const classNames = ["grid-row"]
  if (props.className) classNames.push(props.className)

  return <div id={props.id} className={classNames.join(" ")} role="row" data-columns={props.columns}>{props.children}</div>
}

export interface GridProps extends GridCellProps {
  /**
   * Control the gap between grid cells
   * @default md
   */
  spacing?: "sm" | "md" | "lg" | "xl"
}

const Grid = (props: GridProps) => {
  const classNames = ["grid"]
  if (props.className) classNames.push(props.className)

  return <div id={props.id} className={classNames.join(" ")} data-spacing={props.spacing} role="grid">{props.children}</div>
}

Grid.Cell = GridCell
Grid.Row = GridRow

export { Grid as default, GridRow, GridCell }
