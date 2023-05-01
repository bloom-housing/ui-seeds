import { render, cleanup } from "@testing-library/react"
import Tabs from "../Tabs"

afterEach(cleanup)

describe("<Tabs>", () => {
  it("outputs the right markup", () => {
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

    expect(container.querySelectorAll(".tabs-tab.is-active").length).toBe(1)
    expect(container.querySelectorAll(".tabs-panel.is-active").length).toBe(1)
  })
})
