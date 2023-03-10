import { render, cleanup } from "@testing-library/react"
import FieldValue from "../FieldValue"

afterEach(cleanup)

describe("<FieldValue>", () => {
  it("displays the field value", () => {
    const content = "Value content"
    const label = "Label text"
    const helpText = "Help text"
    const { getByText, container } = render(
      <FieldValue id="fv" className="test-class" label={label} helpText={helpText}>
        {content}
      </FieldValue>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(getByText(label)).toBeInTheDocument()
    expect(getByText(helpText)).toBeInTheDocument()
    expect(container.querySelector("#fv")).not.toBeNull()
    expect(container.querySelector("#fv.test-class")).not.toBeNull()
  })
})
