import { render, cleanup } from "@testing-library/react"
import LoadingState from "../LoadingState"

afterEach(cleanup)

describe("<LoadingState>", () => {
  const content = "Final content"

  it("doesn't display the content while loading", () => {
    const { queryByText, container } = render(
      <LoadingState id="ls" className="test-class" loading>
        {content}
      </LoadingState>,
    )
    expect(queryByText(content)).not.toBeInTheDocument()
    expect(container.querySelector("#ls")).not.toBeNull()
    expect(container.querySelector("#ls.test-class")).not.toBeNull()
  })

  it("displays the content when it's not loading", () => {
    const { getByText } = render(
      <LoadingState id="ls" className="test-class">
        {content}
      </LoadingState>,
    )
    expect(getByText(content)).toBeInTheDocument()
  })
})
