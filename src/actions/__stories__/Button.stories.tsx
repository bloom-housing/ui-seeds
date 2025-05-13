import React from "react"
import { HeartIcon } from "@heroicons/react/24/solid"
import Icon from "../../icons/Icon"
import HeadingGroup from "../../text/HeadingGroup"
import Button from "../Button"
import MDXDocs from "./Button.docs.mdx"

export default {
  title: "Actions/Button",
  component: Button,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const DefaultButton = () => <Button onClick={() => alert("Clicked!")}>Default Button</Button>

const DocsWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ marginTop: "1rem" }}>{props.children}</div>
}

const DocsRowWrapper = (props: React.PropsWithChildren) => {
  return <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>{props.children}</div>
}

export const ButtonVariants = () => (
  <>
    <DocsWrapper>
      <HeadingGroup size="2xl" heading="sm" subheading="Small Size" />
      <div>
        <Button variant="primary" size="sm">
          Primary Small
        </Button>
        <Button variant="secondary" size="sm">
          Secondary Small
        </Button>
        <Button variant="success" size="sm">
          Success Small
        </Button>
        <Button variant="alert" size="sm">
          Alert Small
        </Button>
        <Button variant="warn" size="sm">
          Warn Small
        </Button>
        <Button size="sm" disabled>
          Disabled Small
        </Button>
      </div>
      <div>
        <Button variant="primary-outlined" size="sm">
          Primary Small
        </Button>
        <Button variant="secondary-outlined" size="sm">
          Secondary Small
        </Button>
        <Button variant="success-outlined" size="sm">
          Success Small
        </Button>
        <Button variant="alert-outlined" size="sm">
          Alert Small
        </Button>
        <Button variant="warn-outlined" size="sm">
          Warn Small
        </Button>
        <Button variant="primary-outlined" size="sm" disabled>
          Disabled Small
        </Button>
      </div>
    </DocsWrapper>
    <DocsWrapper>
      <HeadingGroup size="2xl" heading="md" subheading="Medium Size" />
      <div>
        <Button variant="primary" size="md">
          Primary Medium
        </Button>
        <Button variant="secondary" size="md">
          Secondary Medium
        </Button>
        <Button variant="success" size="md">
          Success Medium
        </Button>
        <Button variant="alert" size="md">
          Alert Medium
        </Button>
        <Button variant="warn" size="md">
          Warn Medium
        </Button>
        <Button size="md" disabled>
          Disabled Medium
        </Button>
      </div>
      <div>
        <Button variant="primary-outlined" size="md">
          Primary Medium
        </Button>
        <Button variant="secondary-outlined" size="md">
          Secondary Medium
        </Button>
        <Button variant="success-outlined" size="md">
          Success Medium
        </Button>
        <Button variant="alert-outlined" size="md">
          Alert Medium
        </Button>
        <Button variant="warn-outlined" size="md">
          Warn Medium
        </Button>
        <Button variant="primary-outlined" size="md" disabled>
          Disabled Medium
        </Button>
      </div>
    </DocsWrapper>
    <DocsWrapper>
      <HeadingGroup size="2xl" heading="lg" subheading="Large Size" />
      <div>
        <Button variant="primary" size="lg">
          Primary Large
        </Button>
        <Button variant="secondary" size="lg">
          Secondary Large
        </Button>
        <Button variant="success" size="lg">
          Success Large
        </Button>
        <Button variant="alert" size="lg">
          Alert Large
        </Button>
        <Button variant="warn" size="lg">
          Warn Large
        </Button>
        <Button size="lg" disabled>
          Disabled Large
        </Button>
      </div>
      <div>
        <Button variant="primary-outlined" size="lg">
          Primary Large
        </Button>
        <Button variant="secondary-outlined" size="lg">
          Secondary Large
        </Button>
        <Button variant="success-outlined" size="lg">
          Success Large
        </Button>
        <Button variant="alert-outlined" size="lg">
          Alert Large
        </Button>
        <Button variant="warn-outlined" size="lg">
          Warn Large
        </Button>
        <Button variant="primary-outlined" size="lg" disabled>
          Disabled Large
        </Button>
      </div>
    </DocsWrapper>
    <style>{".seeds-button { margin: .25rem }"}</style>
  </>
)

export const LinkButtons = () => (
  <DocsRowWrapper>
    <Button href="/story">Internal Link</Button>
    <Button href="https://www.exygy.com" hideExternalLinkIcon>
      External Link (Same Window)
    </Button>
    <Button href="https://www.exygy.com" newWindowTarget>
      External Link (New Window)
    </Button>
  </DocsRowWrapper>
)

export const ButtonsWithIcons = () => (
  // import { Icon } from "@bloom-housing/ui-seeds"
  // import { HeartIcon } from "@heroicons/react/24/solid"
  <DocsRowWrapper>
    <Button
      leadIcon={
        <Icon>
          <HeartIcon />
        </Icon>
      }
    >
      Lead Icon
    </Button>
    <Button
      tailIcon={
        <Icon>
          <HeartIcon />
        </Icon>
      }
    >
      Tail Icon
    </Button>
  </DocsRowWrapper>
)

export const TextButtons = () => (
  // import { Icon } from "@bloom-housing/ui-seeds"
  // import { HeartIcon } from "@heroicons/react/24/solid"
  <>
    <DocsRowWrapper>
      <Button variant="text" size="sm">
        Small Size
      </Button>
      <Button variant="text">Medium Size</Button>
    </DocsRowWrapper>
    <DocsRowWrapper>
      <Button
        variant="text"
        leadIcon={
          <Icon>
            <HeartIcon />
          </Icon>
        }
      >
        Lead Icon
      </Button>
      <Button
        variant="text"
        tailIcon={
          <Icon>
            <HeartIcon />
          </Icon>
        }
      >
        Tail Icon
      </Button>
    </DocsRowWrapper>
  </>
)

export const LoadingButton = () => {
  const [loadingMessage, setLoadingMessage] = React.useState<null | string>(null)
  return (
    <Button
      loadingMessage={loadingMessage}
      onClick={() => {
        setLoadingMessage("Submitting application")
        setTimeout(() => setLoadingMessage(null), 3000)
      }}
    >
      Click to spin
    </Button>
  )
}

export const ExpandingButton = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  return (
    <>
      <Button
        onClick={() => setExpanded(!expanded)}
        ariaControls="show-or-hide"
        ariaExpanded={expanded}
      >
        {expanded ? "Hide Content" : "Show Content"}
      </Button>
      <p id="show-or-hide" hidden={!expanded}>
        Content that will only appear in the "expanded" state
      </p>
    </>
  )
}

export const AdditionalNativeProps = () => {
  return (
    <>
      <form id="form1">
        <label htmlFor="input1">First name</label>
        <br />
        <input id="input1" name="input1" />
      </form>
      <br />
      <Button
        onClick={() => alert("Form submitted")}
        type="submit"
        size={"sm"}
        nativeButtonProps={{ form: "form1" }}
      >
        Submit
      </Button>
    </>
  )
}
