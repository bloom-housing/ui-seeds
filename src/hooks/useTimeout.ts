import React from "react"

// Taken from this snippet:
// https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
export default function useTimeout(callback: () => void, delay?: number) {
  const timeoutRef = React.useRef<number | undefined>()
  const savedCallback = React.useRef(callback)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    const tick = () => savedCallback.current()
    if (delay) {
      timeoutRef.current = window.setTimeout(tick, delay)
      return () => window.clearTimeout(timeoutRef.current as number)
    }
  }, [delay])

  return timeoutRef
}
