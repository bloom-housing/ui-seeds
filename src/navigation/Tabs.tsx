import React from "react"

import "./Tabs.scss"

import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs"

export interface TabsProps {
  children: React.ReactNode
  className?: string
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
  const className = ["tabs"]
  if (props.className) className.push(props.className)
  const focusTab = typeof props.focusTabOnClick !== "undefined" ? props.focusTabOnClick : false

  return (
    <ReactTabs {...props} focusTabOnClick={focusTab} className={className.join(" ")} />
  )
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
  return (
    <ReactTab selectedClassName="is-active" {...props} className={className} />
  )
}

Tab.tabsRole = "Tab"

export interface TabListProps {
  children: React.ReactNode
  size?: "sm" | "base"
  className?: string
}

const TabList = (props: TabListProps) => {
  const className = ["tabs-tablist"]
  if (props.className) className.push(props.className)

  return <ReactTabList data-size={props.size || "base"} className={className} children={props.children} />
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
  return (
    <ReactTabPanel selectedClassName="is-active" {...props} className={className} />
  )
}

TabPanel.tabsRole = "TabPanel"

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

export {Tabs as default, Tab, TabList, TabPanel}
