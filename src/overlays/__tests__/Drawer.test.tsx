import { render, fireEvent, cleanup } from "@testing-library/react"
import Button from "../../actions/Button"
import Drawer from "../Drawer"

afterEach(cleanup)

describe("<Drawer>", () => {
  it("renders and closes the drawer", () => {
    const onCloseSpy = jest.fn()
    const { getByText, getAllByRole } = render(
      <Drawer isOpen={true} onClose={onCloseSpy}>
        <Drawer.Header>
          Heading
        </Drawer.Header>
        <Drawer.Content>
          Content
        </Drawer.Content>
        <Drawer.Footer>
          <Button>Button</Button>
        </Drawer.Footer>
      </Drawer>
    )
    expect(getByText("Heading")).toBeInTheDocument()
    expect(getByText("Content")).toBeInTheDocument()
    expect(getByText("Button")).toBeInTheDocument()
    fireEvent.click(getAllByRole("button")[0])
    expect(onCloseSpy).toHaveBeenCalledTimes(1)
  })
})
