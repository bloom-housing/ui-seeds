import React from "react"
import "./LoadingState.scss"

interface LoadingStateProps {
  /** Show the loading state when true */
  loading?: boolean
  /** Content to show when not loading */
  children: React.ReactNode
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Disable aria-live attribute for screen readers */
  disableAriaLive?: boolean
}

const LoadingState = ({ loading, children, id, className, disableAriaLive }: LoadingStateProps) => {
  const classNames = ["seeds-loading-state"]
  if (className) classNames.push(className)

  return (
    <div
      id={id}
      className={classNames.join(" ")}
      aria-live={disableAriaLive ? undefined : "polite"}
      aria-busy={loading}
    >
      {loading ? <div className="loading-state-spinner"></div> : <>{children}</>}
    </div>
  )
}

export { LoadingState as default, LoadingState }
