import React from "react"

/**
 * This hook is a "React-friendly" wrapper around setTimeout. You can use it
 * just like you'd use window.setTimeout
 *
 * Taken from this snippet:
 * https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
 */
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
    } else {
      return () => {} // makes TS happy to have an explicit return
    }
  }, [delay])

  return timeoutRef
}
