import React from "react"

// Taken from this snippet:
// https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
export default function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue)
  const toggle = React.useCallback(() => {
    setValue((v) => !v)
  }, [])
  return [value, toggle]
}
