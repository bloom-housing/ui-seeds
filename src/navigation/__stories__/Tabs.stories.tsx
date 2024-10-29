import React from "react"
import Tabs from "../Tabs"
import Card from "../../blocks/Card"
import HeadingGroup from "../../text/HeadingGroup"
import MDXDocs from "./Tabs.docs.mdx"

export default {
  title: "Navigation/Tabs",
  decorators: [
    (storyFn: any) => (
      <div style={{ padding: "1rem" }}>
        <style>
          {`
      .funky {
        color: var(--seeds-color-accent-warm-dark) !important;
      }
      .styled {
        color: var(--seeds-color-accent-cool) !important;
        font-weight: bold;
      }
      .tabs-panel.styled {
        display: block;
      }
    `}
        </style>

        {storyFn()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

export const Default = () => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab>Title 1</Tabs.Tab>
        <Tabs.Tab>Title 2</Tabs.Tab>
        <Tabs.Tab>Long Tab Title 3</Tabs.Tab>
        <Tabs.Tab disabled>Disabled Tab</Tabs.Tab>
        <Tabs.Tab selectedClassName="funky">Styled</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel>
        <h2>Any content 1</h2>
        <p>Paragraph text 1.</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h2>Any content 2</h2>
        <p>Paragraph text 2.</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h2>Any kind of content here</h2>
        <p>Paragraph text 3.</p>
        <p>Paragraph text 3.</p>
        <p>Paragraph text 3.</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <p>This is disabled</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel selectedClassName="styled">
        <p>Styled tab content</p>
      </Tabs.TabPanel>
    </Tabs>
  )
}

export const SmallTabs = () => {
  return (
    <Tabs>
      <Tabs.TabList size="sm">
        <Tabs.Tab>Title 1</Tabs.Tab>
        <Tabs.Tab>Title 2</Tabs.Tab>
        <Tabs.Tab>Long Tab Title 3</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel>
        <h2>Any content 1</h2>
        <p>Paragraph text 1.</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h2>Any content 2</h2>
        <p>Paragraph text 2.</p>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <h2>Any kind of content here</h2>
        <p>Paragraph text 3.</p>
        <p>Paragraph text 3.</p>
        <p>Paragraph text 3.</p>
      </Tabs.TabPanel>
    </Tabs>
  )
}

export const VerticalTabs = () => {
  return (
    <Tabs verticalSidebar>
      <Tabs.TabList>
        <Tabs.Tab>Title 1</Tabs.Tab>
        <Tabs.Tab>Title 2</Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanel>
        <Card>
          <Card.Header>
            <HeadingGroup
              size="2xl"
              heading="Wildflower"
              subheading="Wildflower (or wild flower)"
            />
          </Card.Header>

          <Card.Section>
            <p>
              A flower that grows in the wild, meaning it was not intentionally seeded or planted.
              The term implies that the plant probably is neither a hybrid nor a selected cultivar
              that is in any way different from the way it appears in the wild as a native plant.
              even if it is growing where it would not naturally.
            </p>
          </Card.Section>

          <Card.Section>
            <p>
              The term can refer to the flowering plant as a whole, even when not in bloom, and not
              just the flower.
            </p>
          </Card.Section>
        </Card>
      </Tabs.TabPanel>
      <Tabs.TabPanel>
        <Card spacing="lg">
          <Card.Header>
            <HeadingGroup size="2xl" heading="lg" subheading="Large Spacing" />
          </Card.Header>

          <Card.Section>
            <p>
              The term can refer to the flowering plant as a whole, even when not in bloom, and not
              just the flower.
            </p>
          </Card.Section>
        </Card>
      </Tabs.TabPanel>
    </Tabs>
  )
}
