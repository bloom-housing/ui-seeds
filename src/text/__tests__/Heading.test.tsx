import { render, cleanup } from "@testing-library/react"
import Heading from "../Heading"

afterEach(cleanup)

describe("<Heading>", () => {
  it("displays the heading", () => {
    const content = "Heading text here"
    const { getByText, container } = render(<Heading id="test-head" className="test-class">{content}</Heading>)
    expect(getByText(content)).toBeInTheDocument()
    expect(container.querySelector("h1")).not.toBeNull()
    expect(container.querySelector("#test-head")).not.toBeNull()
    expect(container.querySelector("#test-head.test-class")).not.toBeNull()
  })

  it("supports h2 tags", () => {
    const { getByText, container } = render(<Heading priority={2}>h2</Heading>)
    expect(container.querySelector("h2")).not.toBeNull()
  })

  it("supports h3 tags", () => {
    const { getByText, container } = render(<Heading priority={3}>h3</Heading>)
    expect(container.querySelector("h3")).not.toBeNull()
  })

  it("supports h4 tags", () => {
    const { getByText, container } = render(<Heading priority={4}>4</Heading>)
    expect(container.querySelector("h4")).not.toBeNull()
  })
})
