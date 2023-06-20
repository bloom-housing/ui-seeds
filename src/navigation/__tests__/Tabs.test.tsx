import { render, fireEvent, cleanup } from "@testing-library/react"
import Tabs from "../Tabs"

afterEach(cleanup)

describe("<Tabs>", () => {
  it("outputs the right markup for selected tab", () => {
    const { container, getByText } = render(
      <Tabs defaultIndex={1}>
        <Tabs.TabList>
          <Tabs.Tab className="other-tab">Other</Tabs.Tab>
          <Tabs.Tab className="default-tab">Default</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel className="other-panel">OtherPanel</Tabs.TabPanel>
        <Tabs.TabPanel className="default-panel">DefaultPanel</Tabs.TabPanel>
      </Tabs>
    )

    expect(getByText("Other")).toBeTruthy()
    expect(container.getElementsByClassName("other-tab").length).toBe(1)
    expect(container.getElementsByClassName("other-panel").length).toBe(1)

    expect(getByText("Default")).toBeTruthy()
    expect(container.getElementsByClassName("default-tab").length).toBe(1)
    expect(container.getElementsByClassName("default-panel").length).toBe(1)

    let activeTabs = container.querySelectorAll(".tabs-tab.is-active")
    expect(activeTabs.length).toBe(1)
    expect(activeTabs[0].className).toStrictEqual("tabs-tab default-tab is-active")
    let activePanels = container.querySelectorAll(".tabs-panel.is-active")
    expect(activePanels.length).toBe(1)
    expect(activePanels[0].className).toStrictEqual("tabs-panel default-panel is-active")

    fireEvent.click(getByText("Other"))

    activeTabs = container.querySelectorAll(".tabs-tab.is-active")
    expect(activeTabs[0].className).toStrictEqual("tabs-tab other-tab is-active")
    activePanels = container.querySelectorAll(".tabs-panel.is-active")
    expect(activePanels[0].className).toStrictEqual("tabs-panel other-panel is-active")
  })
})
