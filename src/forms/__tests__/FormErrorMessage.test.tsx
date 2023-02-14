import { render, cleanup } from "@testing-library/react"
import FormErrorMessage from "../FormErrorMessage"

afterEach(cleanup)

describe("<FormErrorMessage>", () => {
  it("displays the error message", () => {
    const content = "Error message here"
    const { getByText, container } = render(<FormErrorMessage id="err" className="test-class">{content}</FormErrorMessage>)
    expect(getByText(content)).toBeInTheDocument()
    expect(container.querySelector("#err")).not.toBeNull()
    expect(container.querySelector("#err.test-class")).not.toBeNull()
  })
})
