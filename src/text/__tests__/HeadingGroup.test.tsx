import { render, cleanup } from "@testing-library/react"
import HeadingGroup from "../HeadingGroup"

afterEach(cleanup)

describe("<HeadingGroup>", () => {
  it("displays the heading group", () => {
    const { getByText, container } = render(<HeadingGroup id="test-head" className="test-class" heading="Title" subheading="Subtitle" />)
    expect(getByText("Title")).toBeInTheDocument()
    expect(getByText("Subtitle")).toBeInTheDocument()
    expect(container.querySelector("h2")).not.toBeNull()
    expect(container.querySelector("p")).not.toBeNull()
    expect(container.querySelector("#test-head")).not.toBeNull()
    expect(container.querySelector("#test-head.test-class")).not.toBeNull()
  })
})
