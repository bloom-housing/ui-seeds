import { render, cleanup, fireEvent } from "@testing-library/react"
import Button from "../Button"

import Icon from "../../icons/Icon"
import { HeartIcon } from "@heroicons/react/24/solid"

afterEach(cleanup)

describe("<Button>", () => {
  it("displays a clickable button", () => {
    let wasClicked = false
    const content = "Button Label"
    const { getByText, container } = render(
      <Button id="test-button" className="test-class" onClick={() => (wasClicked = true)}>
        {content}
      </Button>,
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(
      container.querySelector("#test-button.test-class[data-variant='primary']"),
    ).not.toBeNull()

    fireEvent.click(getByText(content))

    expect(wasClicked).toBeTruthy()
  })

  it("displays an anchor with an href", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Button href="/my-page">{content}</Button>)

    expect(getByRole("link", { name: content })).toHaveAttribute("href", "/my-page")
    expect(container.querySelector("svg")).toBeNull()
  })

  it("displays external links with an icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(
      <Button href="https://example.com" newWindowTarget>
        {content}
      </Button>,
    )

    expect(getByRole("link", { name: `${content} (opens in a new tab)` })).toHaveAttribute(
      "href",
      "https://example.com",
    )
    expect(container.querySelector("svg")).toBeVisible()
  })

  it("displays external links with a custom icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(
      <Button
        href="https://example.com"
        tailIcon={
          <Icon>
            <HeartIcon />
          </Icon>
        }
      >
        {content}
      </Button>,
    )

    expect(getByRole("link", { name: content })).toHaveAttribute("href", "https://example.com")
    expect(container.querySelector("svg")).toBeVisible()
  })

  it("displays external links with no icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(
      <Button href="https://example.com" hideExternalLinkIcon>
        {content}
      </Button>,
    )

    expect(getByRole("link", { name: content })).toHaveAttribute("href", "https://example.com")
    expect(container.querySelector("svg")).toBeNull()
  })

  it("correctly spread additional native attributes", () => {
    const content = "Button Label"
    const { getByRole } = render(
      <Button onClick={() => {}} nativeButtonProps={{ form: "form1" }}>
        {content}
      </Button>,
    )

    expect(getByRole("button", { name: content })).toHaveAttribute("form", "form1")
  })
})
