import React from "react"
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs"
import { SeedsSizes } from "../global/sharedTypes"
import "./Tabs.scss"

export interface TabsProps {
  children: React.ReactNode
  className?: string
  /** If true, displays tabs and the selected tab panel side-by-side on larger displays */
  verticalSidebar?: boolean
  defaultFocus?: boolean
  defaultIndex?: number
  disabledTabClassName?: string
  domRef?: (node?: HTMLElement) => void
  focusTabOnClick?: boolean
  forceRenderTabPanel?: boolean
  onSelect?: (index: number, last: number, event: Event) => boolean | void
  selectedIndex?: number
  selectedTabClassName?: string
  selectedTabPanelClassName?: string
}

const Tabs = (props: TabsProps) => {
  const className = ["seeds-tabs"]
  if (props.className) className.push(props.className)
  if (props.verticalSidebar) className.push("vertical-sidebar-layout")
  const focusTab = typeof props.focusTabOnClick !== "undefined" ? props.focusTabOnClick : false

  return <ReactTabs {...props} focusTabOnClick={focusTab} className={className.join(" ")} />
}

export interface TabProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  disabledClassName?: string
  selectedClassName?: string
  tabIndex?: string
}

const Tab = (props: TabProps) => {
  const className = ["tabs-tab"]
  if (props.className) className.push(props.className)
  return <ReactTab selectedClassName="is-active" {...props} className={className} />
}

Tab.tabsRole = "Tab"

export type TabSize = Extract<SeedsSizes, "sm" | "md">

export interface TabListProps {
  children: React.ReactNode
  size?: TabSize
  className?: string
}

const TabList = (props: TabListProps) => {
  const className = ["tabs-tablist"]
  if (props.className) className.push(props.className)

  return (
    <ReactTabList data-size={props.size || "md"} className={className} children={props.children} />
  )
}

TabList.tabsRole = "TabList"

export interface TabPanelProps {
  children: React.ReactNode
  className?: string
  forceRender?: boolean
  selectedClassName?: string
}

const TabPanel = (props: TabPanelProps) => {
  const className = ["tabs-panel"]
  if (props.className) className.push(props.className)
  return <ReactTabPanel selectedClassName="is-active" {...props} className={className} />
}

TabPanel.tabsRole = "TabPanel"

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

export { Tabs as default, Tab, TabList, TabPanel }
