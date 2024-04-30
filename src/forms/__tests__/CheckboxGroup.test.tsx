import { render, cleanup, screen, fireEvent } from "@testing-library/react"
import CheckboxGroup from "forms/CheckboxGroup"

afterEach(cleanup)

describe("<CheckboxGroup>", () => {
  it("displays the CheckboxGroup", () => {
    const options = ["Option 1", "Option 2", "Option 3"]
    let values: string[] = []
    const setValues = jest.fn((newValues) => {
      values = newValues
    })

    render(
      <CheckboxGroup
        id="MyCheckboxGroup"
        testId="MyCheckboxGroup"
        className="test-class"
        options={options}
        values={values}
        onChange={setValues}
      />
    )
    expect(screen.getByText(options[0])).toBeInTheDocument()
    expect(screen.getByText(options[1])).toBeInTheDocument()
    expect(screen.getByText(options[2])).toBeInTheDocument()

    expect(screen.getByTestId("MyCheckboxGroup")).not.toBeNull()
    expect(screen.getByTestId("MyCheckboxGroup")).toHaveClass("test-class")

    const checkboxOne = screen.getByRole("checkbox", { name: /Option 1/i })
    expect((checkboxOne as HTMLInputElement).checked).toBe(false)

    fireEvent.click(checkboxOne)
    expect(setValues).toHaveBeenCalledWith(["Option 1"])
    expect(values).toEqual(["Option 1"])
  })
})
