import { render, fireEvent, cleanup, screen, within } from "@testing-library/react"
import Tabs from "../Tabs"

afterEach(cleanup)

describe("<Tabs>", () => {
  it("outputs the right markup for selected tab", () => {
    render(
      <Tabs defaultIndex={1}>
        <Tabs.TabList>
          <Tabs.Tab className="other-tab">Other</Tabs.Tab>
          <Tabs.Tab className="default-tab">Default</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel className="other-panel">OtherPanel</Tabs.TabPanel>
        <Tabs.TabPanel className="default-panel">DefaultPanel</Tabs.TabPanel>
      </Tabs>,
    )

    expect(screen.getByRole("tab", { name: "Other" })).toHaveClass("other-tab")
    expect(screen.getByRole("tab", { name: "Default" })).toHaveClass("default-tab")

    let activeTabs = screen.getAllByRole("tab", { selected: true })
    expect(activeTabs.length).toBe(1)
    expect(activeTabs[0]).toHaveClass("tabs-tab", "default-tab", "is-active")
    expect(screen.getByText("DefaultPanel")).toBeVisible()
    expect(screen.queryByText("OtherPanel")).toBeNull()

    fireEvent.click(screen.getByRole("tab", { name: "Other" }))

    activeTabs = screen.getAllByRole("tab", { selected: true })
    expect(activeTabs[0]).toHaveClass("tabs-tab", "other-tab", "is-active")
    expect(screen.getByText("OtherPanel")).toBeVisible()
    expect(screen.queryByText("DefaultPanel")).toBeNull()
  })

  it("renders tab links in navigation mode and does not render tab panels", () => {
    render(
      <Tabs navigation>
        <Tabs.TabList>
          <Tabs.Tab href="/one" active>
            One
          </Tabs.Tab>
          <Tabs.Tab href="/two">Two</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel>Hidden Panel</Tabs.TabPanel>
      </Tabs>,
    )

    expect(screen.getByRole("navigation", { name: "Section navigation" })).toBeInTheDocument()
    const navList = screen.getByRole("list")
    const listItems = within(navList).getAllByRole("listitem")
    expect(listItems.length).toBe(2)

    const one = screen.getByRole("link", { name: "One" })
    const two = screen.getByRole("link", { name: "Two" })

    expect(one).toHaveAttribute("href", "/one")
    expect(two).toHaveAttribute("href", "/two")
    expect(one).toHaveAttribute("aria-current", "page")
    expect(listItems[0]).toHaveAttribute("data-active", "true")
    expect(listItems[1]).toHaveAttribute("data-active", "false")
    expect(screen.queryByText("Hidden Panel")).toBeNull()
  })

  it("allows custom navigation landmark labels", () => {
    render(
      <Tabs navigation navigationLabel="Account sections">
        <Tabs.TabList>
          <Tabs.Tab href="/profile" active>
            Profile
          </Tabs.Tab>
        </Tabs.TabList>
      </Tabs>,
    )

    expect(screen.getByRole("navigation", { name: "Account sections" })).toBeInTheDocument()
  })

  it("renders disabled navigation tab as a non-link with disabled state", () => {
    render(
      <Tabs navigation>
        <Tabs.TabList>
          <Tabs.Tab href="/one">One</Tabs.Tab>
          <Tabs.Tab disabled>Disabled</Tabs.Tab>
        </Tabs.TabList>
      </Tabs>,
    )

    const disabledLink = screen.queryByRole("link", { name: "Disabled" })
    expect(disabledLink).toBeNull()

    const navList = screen.getByRole("list")
    const disabledListItem = within(navList).getAllByRole("listitem")[1]
    const disabledLabel = within(disabledListItem).getByText("Disabled")

    expect(disabledListItem).toHaveAttribute("data-disabled", "true")
    expect(disabledLabel).toHaveAttribute("aria-disabled", "true")
  })
})
