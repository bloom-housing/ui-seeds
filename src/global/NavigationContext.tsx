import React, {
  createContext,
  FunctionComponent,
  AnchorHTMLAttributes,
  DetailedHTMLProps,
} from "react"

export const isExternalLink = (href: string) => {
  return href.startsWith("http://") || href.startsWith("https://")
}

export const isInternalLink = (href: string) => {
  return href.startsWith("/") && !href.startsWith("//")
}

export const shouldShowExternalLinkIcon = ({
  href,
  tailIcon,
  hideExternalLinkIcon,
}: {
  href?: string | undefined
  tailIcon?: React.ReactNode
  hideExternalLinkIcon?: boolean
}) => {
  return href && !tailIcon && isExternalLink(href) && !hideExternalLinkIcon
}

export const ExternalLinkScreenReaderText = () => (
  <span className="seeds-screen-reader-only">(opens in a new tab)</span>
)

type DefaultLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export interface LinkProps extends DefaultLinkProps {
  className?: string
}

export interface NavigationContextProps {
  LinkComponent: FunctionComponent<LinkProps>
}

export const NavigationContext = createContext<NavigationContextProps>({
  LinkComponent: (props) => (
    <a className={props.className} {...props}>
      {props.children}
    </a>
  ),
})
