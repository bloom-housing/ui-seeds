import { render, fireEvent, cleanup } from "@testing-library/react"
import Button from "../../actions/Button"
import Dialog from "../Dialog"

afterEach(cleanup)

describe("<Dialog>", () => {
  it("renders and closes the dialog", () => {
    const onCloseSpy = jest.fn()
    const { getByText, getAllByRole } = render(
      <Dialog isOpen={true} onClose={onCloseSpy}>
        <Dialog.Header>
          Heading
        </Dialog.Header>
        <Dialog.Content>
          Content
        </Dialog.Content>
        <Dialog.Footer>
          <Button>Button</Button>
        </Dialog.Footer>
      </Dialog>
    )
    expect(getByText("Heading")).toBeInTheDocument()
    expect(getByText("Content")).toBeInTheDocument()
    expect(getByText("Button")).toBeInTheDocument()
    fireEvent.click(getAllByRole("button")[0])
    expect(onCloseSpy).toHaveBeenCalledTimes(1)
  })
})
