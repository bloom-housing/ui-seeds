export interface CommonIconProps {
  /** Element ID */
  id?: string
  /** Additional CSS classes */
  className?: string
  /** Specify a specific preset size */
  size?: "utility-sm" | "utility-md" | "badge-lg" | "badge-xl"
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
}

export const iconClassNames = (props: CommonIconProps) => {
  const classNames = ["icon"]
  if (props.className) classNames.push(props.className)

  return classNames
}
