import React from "react"

/**
 * Provides a toggling function which can be passed straight to a click handler
 * and also can be passed to child components without breaking memoization
 *
 * Taken from this snippet:
 * https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/
 */
export default function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue)
  const toggle = React.useCallback(() => {
    setValue((v) => !v)
  }, [])
  return [value, toggle]
}
