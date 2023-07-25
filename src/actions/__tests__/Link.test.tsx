import { render, cleanup, fireEvent } from "@testing-library/react"
import Link from "../Link"

import Icon from "../../icons/Icon"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

afterEach(cleanup)

describe("<Link>", () => {
  it("displays a link with a URL", () => {
    const content = "Link Label"
    const { getByRole, getByText, container } = render(
      <Link href="/my-page" id="test-link" className="test-class">
        {content}
      </Link>
    )
    expect(getByText(content)).toBeInTheDocument()
    expect(
      container.querySelector("#test-link.test-class")
    ).not.toBeNull()
    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "/my-page"
    )
    expect(container.querySelector("svg")).toBeNull()
  })

  it("displays external links with an icon", () => {
    const content = "Link Label"
    const { getByRole, container } = render(<Link href="https://example.com">{content}</Link>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg[data-icon='arrow-up-right-from-square']")).toBeVisible()
  })

  it("displays external links with a custom icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Link href="https://example.com" tailIcon={<Icon icon={faHeart} />}>{content}</Link>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg[data-icon='heart']")).toBeVisible()
  })

  it("displays external links with no icon", () => {
    const content = "Button Label"
    const { getByRole, container } = render(<Link href="https://example.com" hideExternalLinkIcon>{content}</Link>)

    expect(getByRole("link", { name: content })).toHaveAttribute(
      "href",
      "https://example.com"
    )
    expect(container.querySelector("svg")).toBeNull()
  })
})
