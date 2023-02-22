import { render, cleanup } from "@testing-library/react"
import CustomIcon from "../CustomIcon"

afterEach(cleanup)

describe("<CustomIcon>", () => {
  it("displays the icon", () => {
    const { getByText, container } = render(<CustomIcon icon={<svg />} id="icn" className="test-class" />)
    expect(container.querySelector("#icn")).not.toBeNull()
    expect(container.querySelector("#icn.test-class")).not.toBeNull()
    expect(container.querySelector("#icn svg")).not.toBeNull()
  })
})
