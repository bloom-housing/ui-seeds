import React, { createContext, useContext } from "react"
import { SeedsSizes } from "../global/sharedTypes"
import "./Grid.scss"

interface GridContextType {
  roles: boolean | undefined
}

const GridContext = createContext<GridContextType | null>(null)

export interface GridCellProps {
  children: React.ReactNode
  id?: string
  className?: string
}

const GridCell = (props: GridCellProps) => {
  const classNames = ["seeds-grid-cell"]
  if (props.className) classNames.push(props.className)

  const context = useContext(GridContext)
  return (
    <div id={props.id} className={classNames.join(" ")} role={context?.roles ? "gridcell" : ""}>
      {props.children}
    </div>
  )
}

export interface GridRowProps extends GridCellProps {
  columns?: number | string
}

const GridRow = (props: GridRowProps) => {
  const classNames = ["seeds-grid-row"]
  if (props.className) classNames.push(props.className)

  const context = useContext(GridContext)
  return (
    <div
      id={props.id}
      className={classNames.join(" ")}
      role={context?.roles ? "row" : ""}
      data-columns={props.columns}
    >
      {props.children}
    </div>
  )
}

export type GridSpacing = Extract<SeedsSizes, "sm" | "md" | "lg" | "xl">

export interface GridProps extends GridCellProps {
  /**
   * If true, adds grid, row, and gridcell roles to each component. Only recommended for use where the grid itself is a primary interactive widget, such as a data grid or a spreadsheet-like interface - not just for displaying data that happens to be visually arranged in a grid
   * @default md
   */
  roles?: boolean
  /**
   * Control the gap between grid cells
   * @default md
   */
  spacing?: GridSpacing
}

const Grid = (props: GridProps) => {
  const classNames = ["seeds-grid"]
  if (props.className) classNames.push(props.className)

  return (
    <GridContext.Provider value={{ roles: props.roles }}>
      <div
        id={props.id}
        className={classNames.join(" ")}
        data-spacing={props.spacing}
        role={props.roles ? "grid" : ""}
      >
        {props.children}
      </div>
    </GridContext.Provider>
  )
}

Grid.Cell = GridCell
Grid.Row = GridRow

export { Grid as default, GridRow, GridCell }
