import { render, cleanup, fireEvent } from "@testing-library/react"
import Button from "../Button"

import Icon from "../../icons/Icon"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

afterEach(cleanup)

describe("<Button>", () => {
  it("displays a clickable button", () => {
    let wasClicked = false
    const content = "Button Label"
    const { getByText, container } = render(
      <Button id="test-button" className="test-class" onClick={() => (wasClicked = true)}>
        {content}
      </Button>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(
      container.querySelector("#test-button.test-class[data-variant='primary']")
    ).not.toBeNull()

    fireEvent.click(getByText(content))

    expect(wasClicked).toBeTruthy()
  })

  it("displays an anchor with an href", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Button href="/my-page">{content}</Button>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "/my-page"
    )
    expect(container.querySelector("svg")).toBeNull()
  })

  it("displays external links with an icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Button href="https://example.com">{content}</Button>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg[data-icon='arrow-up-right-from-square']")).toBeVisible()
  })

  it("displays external links with a custom icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Button href="https://example.com" tailIcon={<Icon icon={faHeart} />}>{content}</Button>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg[data-icon='heart']")).toBeVisible()
  })

  it("displays external links with no icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Button href="https://example.com" hideExternalLinkIcon>{content}</Button>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg")).toBeNull()
  })
})
