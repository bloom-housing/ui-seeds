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
}

const LoadingState = ({ loading, children, id, className }: LoadingStateProps) => {
  const classNames = ["seeds-loading-state"]
  if (className) classNames.push(className)

  return (
    <div id={id} className={classNames.join(" ")} aria-live="polite" aria-busy={loading}>
      {loading ? <div className="loading-state-spinner"></div> : <>{children}</>}
    </div>
  )
}

export { LoadingState as default, LoadingState }
