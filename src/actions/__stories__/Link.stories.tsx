import React from "react"
import { HeartIcon } from "@heroicons/react/24/solid"
import Link from "../Link"
import Icon from "../../icons/Icon"
import MDXDocs from "./Link.docs.mdx"

export default {
  title: "Actions/Link",
  component: Link,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const BasicLink = () => (
  <p>
    Hello world. <Link href="#">This is a link.</Link>
  </p>
)

const DocsWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ display: "flex", gap: "1rem" }}>{props.children}</div>
}

export const ExternalLink = () => (
  <DocsWrapper>
    <Link href="/test">Internal Link</Link>
    <Link href="https://www.exygy.com" newWindowTarget>
      External Link (New Window)
    </Link>
    <Link href="/test" newWindowTarget>
      Internal Link (New Window)
    </Link>
    <Link href="https://www.exygy.com" hideExternalLinkIcon>
      External Link (Same Window)
    </Link>
  </DocsWrapper>
)

export const LinksWithIcons = () => (
  // import { Icon } from "@bloom-housing/ui-seeds"
  // import { HeartIcon } from "@heroicons/react/24/solid"
  <DocsWrapper>
    <Link
      href="/story"
      leadIcon={
        <Icon>
          <HeartIcon />
        </Icon>
      }
    >
      Lead Icon
    </Link>
    <Link
      href="/story"
      tailIcon={
        <Icon>
          <HeartIcon />
        </Icon>
      }
    >
      Tail Icon
    </Link>
  </DocsWrapper>
)
