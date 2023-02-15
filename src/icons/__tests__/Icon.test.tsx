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
})
