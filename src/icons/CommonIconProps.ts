export interface CommonIconProps {
  id?: string
  className?: string
  size?: "utility-sm" | "utility-md" | "badge-lg" | "badge-xl"
  "aria-hidden"?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
}

export const iconClassNames = (props: CommonIconProps) => {
  const classNames = ["icon"]
  if (props.size) classNames.push(`icon--${props.size}`)
  if (props.className) classNames.push(props.className)

  return classNames
}
