import React, { useMemo } from "react"
import "./LoadingState.scss"

interface LoadingStateProps {
  loading: boolean
  children: React.ReactNode
}

const LoadingState = ({ loading, children }: LoadingStateProps) => {
  return (
    <div className="seeds-loading-state" aria-live="polite" aria-busy={loading}>
      {loading ? <div className="loading-state-spinner"></div> : <>{children}</>}
    </div>
  )
}

export { LoadingState as default, LoadingState }
