import { render, cleanup } from "@testing-library/react"
import Icon from "../Icon"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

afterEach(cleanup)

describe("<Icon>", () => {
  it("displays the icon", () => {
    const { getByText, container } = render(<Icon icon={faCoffee} id="icn" className="test-class" />)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn.test-class")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })

  it("supports different sizes", () => {
    const { getByText, container } = render(<Icon icon={faCoffee} size="utility-md" id="icn" />)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn[data-size='utility-md']")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })

  it("displays SVG child content", () => {
    const { getByText, container } = render(<Icon id="icn" className="test-class"><svg /></Icon>)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn.test-class")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })
})
