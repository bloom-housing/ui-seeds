import { render, cleanup } from "@testing-library/react"
import Card from "../Card"

afterEach(cleanup)

describe("<Card>", () => {
  it("displays the field value", () => {
    const content = "Value content"
    const heading = "Heading text"
    const footer = "Footer text"
    const { getByText, container } = render(
      <Card id="test-card" className="test-class" spacing="lg">
        <Card.Header divider="flush">{heading}</Card.Header>
        <Card.Section divider="flush">{content}</Card.Section>
        <Card.Footer divider="flush">{footer}</Card.Footer>
      </Card>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(getByText(heading)).toBeInTheDocument()
    expect(getByText(footer)).toBeInTheDocument()
    expect(container.querySelectorAll("#test-card > [data-divider=flush]").length).toStrictEqual(3)
    expect(container.querySelector("#test-card[data-spacing=lg]")).not.toBeNull()
    expect(container.querySelector("#test-card.test-class")).not.toBeNull()
  })
})
