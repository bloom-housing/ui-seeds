import { render, cleanup, fireEvent } from "@testing-library/react"
import CommonMessage from "../shared/CommonMessage"

afterEach(cleanup)

describe("<CommonMessage>", () => {
  it("displays the message", () => {
    const content = "Common message here"
    const { getByText, container } = render(
      <CommonMessage role="alert" id="test-id" className="test-class">
        {content}
      </CommonMessage>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(container.querySelector("#test-id")).not.toBeNull()
    expect(container.querySelector("#test-id.test-class")).not.toBeNull()
    expect(container.querySelector("[role=alert]")).not.toBeNull()
  })

  it("supports variants", () => {
    const content = "Common message here"
    const { getByText, container } = render(
      <CommonMessage variant="warn" id="test-id" className="test-class" closeable>
        {content}
      </CommonMessage>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(container.querySelector("#test-id.test-class")).not.toBeNull()
    expect(container.querySelector("#test-id[data-variant=warn]")).not.toBeNull()
    expect(container.querySelector("button[aria-label=Close]")).not.toBeNull()
    expect(container.querySelector("svg")).not.toBeNull()
  })

  it("supports a custom onClose callback", () => {
    let wasClosed = false
    const content = "Click me"
    const { getByLabelText } = render(
      <CommonMessage
        variant="warn"
        id="test-id"
        className="test-class"
        closeable
        onClose={() => {
          wasClosed = true
        }}
      >
        {content}
      </CommonMessage>
    )

    fireEvent.click(getByLabelText("Close"))
    expect(wasClosed).toBeTruthy()
  })
})
