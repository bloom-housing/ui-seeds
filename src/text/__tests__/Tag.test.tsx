import { render, cleanup } from "@testing-library/react"
import Tag from "../Tag"

afterEach(cleanup)

describe("<Tag>", () => {
  it("displays the tag", () => {
    const content = "Tag text here"
    const { getByText, container } = render(<Tag id="test-tag" className="test-class">{content}</Tag>)
    expect(getByText(content)).toBeInTheDocument()
    expect(container.querySelector(".seeds-tag")).not.toBeNull()
    expect(container.querySelector("#test-tag")).not.toBeNull()
    expect(container.querySelector("#test-tag.test-class")).not.toBeNull()
  })

  it("supports variants", () => {
    const { container } = render(<Tag variant="success-inverse">size lg</Tag>)
    expect(container.querySelector(".seeds-tag[data-variant='success-inverse']")).not.toBeNull()
  })

  it("supports sizes", () => {
    const { container } = render(<Tag size="lg">size lg</Tag>)
    expect(container.querySelector(".seeds-tag[data-size='lg']")).not.toBeNull()
  })
})
