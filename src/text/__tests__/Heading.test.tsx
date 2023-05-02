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

  it("supports other priorities", () => {
    const { getByText, container } = render(<Heading priority={2}>h2</Heading>)
    expect(container.querySelector("h2")).not.toBeNull()
  })

  it("supports sizes", () => {
    const { getByText, container } = render(<Heading size="2xl">size 2xl</Heading>)
    expect(container.querySelector("h1.text-heading-2xl")).not.toBeNull()
  })
})
