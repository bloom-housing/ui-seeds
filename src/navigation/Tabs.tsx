import React from "react"
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs"
import { SeedsSizes } from "../global/sharedTypes"
import "./Tabs.scss"

const TabsModeContext = React.createContext({
  navigation: false,
  navigationLabel: "Section navigation",
})

export interface TabsProps {
  /** Content of the tabs component, including `Tabs.TabList` and `Tabs.TabPanel` children */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** If true, displays tabs and the selected tab panel side-by-side on larger displays */
  verticalSidebar?: boolean
  /**
   * If true, tabs are rendered as URL navigation links and tab panels are not rendered.
   * Use this when tabs should navigate to another page or route.
   */
  navigation?: boolean
  /** Accessible label for the navigation landmark when `navigation` is true */
  navigationLabel?: string
  /* The below props are all passed directly to React Tabs component - see https://github.com/reactjs/react-tabs for details */
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
  const { navigation, navigationLabel, ...reactTabsProps } = props
  const className = ["seeds-tabs"]
  if (props.className) className.push(props.className)
  if (props.verticalSidebar) className.push("vertical-sidebar-layout")
  const focusTab = typeof props.focusTabOnClick !== "undefined" ? props.focusTabOnClick : false
  const navLabel = navigationLabel || "Section navigation"

  if (navigation) {
    return (
      <TabsModeContext.Provider value={{ navigation, navigationLabel: navLabel }}>
        <div className={className.join(" ")}>{props.children}</div>
      </TabsModeContext.Provider>
    )
  }

  return (
    <TabsModeContext.Provider value={{ navigation: false, navigationLabel: navLabel }}>
      <ReactTabs {...reactTabsProps} focusTabOnClick={focusTab} className={className.join(" ")} />
    </TabsModeContext.Provider>
  )
}

export interface TabProps {
  /** Content of the tab */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** If true, the tab is disabled and not interactive */
  disabled?: boolean
  /** URL to navigate to when `Tabs` is in `navigation` mode */
  href?: string
  /** Marks this tab as selected when `Tabs` is in `navigation` mode */
  active?: boolean
  /* The below props are all passed directly to React Tabs component - see https://github.com/reactjs/react-tabs for details */
  disabledClassName?: string
  selectedClassName?: string
  tabIndex?: string
}

const Tab = (props: TabProps) => {
  const { navigation } = React.useContext(TabsModeContext)
  const { href, active, ...reactTabProps } = props
  const className = ["tabs-tab"]
  if (props.className) className.push(props.className)

  if (navigation) {
    const selected = Boolean(active)
    const disabled = Boolean(props.disabled)

    if (!disabled && href) {
      return (
        <li data-active={selected} data-disabled={disabled} className={className.join(" ")}>
          <a href={href} aria-current={selected ? "page" : undefined} className="tabs-tab-link">
            {props.children}
          </a>
        </li>
      )
    }

    // If the tab is disabled or doesn't have an href, render a non-interactive element with appropriate aria attributes, as a native anchor element doesn't support disabled state
    return (
      <li data-active={selected} data-disabled={disabled} className={className.join(" ")}>
        <span aria-disabled={disabled} role="link" className="tabs-tab-link">
          {props.children}
        </span>
      </li>
    )
  }

  return <ReactTab selectedClassName="is-active" {...reactTabProps} className={className} />
}

Tab.tabsRole = "Tab"

export type TabSize = Extract<SeedsSizes, "sm" | "md">

export interface TabListProps {
  /** Content of the tab list, including `Tabs.Tab` children */
  children: React.ReactNode
  /* The size of the tabs, which controls padding and font size. Defaults to "md". */
  size?: TabSize
  /** Additional CSS classes */
  className?: string
}

const TabList = (props: TabListProps) => {
  const { navigation, navigationLabel } = React.useContext(TabsModeContext)
  const className = ["tabs-tablist"]
  if (props.className) className.push(props.className)

  if (navigation) {
    return (
      <nav aria-label={navigationLabel}>
        <ul data-size={props.size || "md"} className={className.join(" ")}>
          {props.children}
        </ul>
      </nav>
    )
  }

  return (
    <ReactTabList data-size={props.size || "md"} className={className} children={props.children} />
  )
}

TabList.tabsRole = "TabList"

export interface TabPanelProps {
  /** Content of the tab panel */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /* The below props are passed directly to React Tabs component - see https://github.com/reactjs/react-tabs for details */
  forceRender?: boolean
  selectedClassName?: string
}

const TabPanel = (props: TabPanelProps) => {
  const { navigation } = React.useContext(TabsModeContext)

  if (navigation) {
    return null
  }

  const className = ["tabs-panel"]
  if (props.className) className.push(props.className)
  return <ReactTabPanel selectedClassName="is-active" {...props} className={className} />
}

TabPanel.tabsRole = "TabPanel"

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

export { Tabs as default, Tab, TabList, TabPanel }
