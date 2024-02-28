import { render, cleanup } from "@testing-library/react"
import Icon from "../Icon"
import { BookOpenIcon } from "@heroicons/react/24/solid"

afterEach(cleanup)

describe("<Icon>", () => {
  it("displays the icon", () => {
    const { container } = render(<Icon id="icn" className="test-class"><BookOpenIcon /></Icon>)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn.test-class")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })

  it("supports different sizes", () => {
    const { container } = render(<Icon size="md" id="icn"><BookOpenIcon /></Icon>)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn[data-size='md']")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })

  it("displays SVG child content", () => {
    const { container } = render(<Icon id="icn" className="test-class"><svg /></Icon>)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn.test-class")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })
})
