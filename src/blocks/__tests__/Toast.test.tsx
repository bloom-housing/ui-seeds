import { render, cleanup } from "@testing-library/react"
import Toast from "../Toast"

afterEach(cleanup)

describe("<Toast>", () => {
  it("displays the notification", () => {
    const content = "Toast message here"
    const { getByText, baseElement } = render(<Toast id="test-id" className="test-class">{content}</Toast>)
    expect(getByText(content)).toBeInTheDocument()
    expect(baseElement.querySelector("#toast-stack .toast")).not.toBeNull()
    expect(baseElement.querySelector("#test-id")).not.toBeNull()
    expect(baseElement.querySelector("#test-id.test-class")).not.toBeNull()
    expect(baseElement.querySelector("[role=alert]")).not.toBeNull()
  })
})