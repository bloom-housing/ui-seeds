import { render, cleanup, screen, fireEvent } from "@testing-library/react"
import CheckboxGroup, { CheckboxItem } from "forms/CheckboxGroup"

afterEach(cleanup)

describe("<CheckboxGroup>", () => {
  it("displays the CheckboxGroup", () => {
    const options = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
    ]
    let values: CheckboxItem[] = []
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
    expect(screen.getByText(options[0].label)).toBeInTheDocument()
    expect(screen.getByText(options[1].label)).toBeInTheDocument()
    expect(screen.getByText(options[2].label)).toBeInTheDocument()

    expect(screen.getByTestId("MyCheckboxGroup")).not.toBeNull()
    expect(screen.getByTestId("MyCheckboxGroup")).toHaveClass("test-class")

    const checkboxOne = screen.getByRole("checkbox", { name: /1/i })
    expect((checkboxOne as HTMLInputElement).checked).toBe(false)

    fireEvent.click(checkboxOne)
    expect(setValues).toHaveBeenCalledWith([{label: "1", value: "1"}])
    expect(values).toEqual([{label: "1", value: "1"}])
  })
})
