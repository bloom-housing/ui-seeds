import React, {
  createContext,
  FunctionComponent,
  AnchorHTMLAttributes,
  DetailedHTMLProps,
} from "react"

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
