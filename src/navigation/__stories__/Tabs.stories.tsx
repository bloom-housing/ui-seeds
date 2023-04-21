import React from "react"
import Tabs from "../Tabs"

export default {
  title: "Navigation/Tabs",
  decorators: [
    (storyFn: any) => (
      <div style={{ padding: "1rem" }}>
        <style>
          {`
      .styled {
        color: blue !important;
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
}

export const Default = () => {
  return (
    <Tabs>
      <Tabs.TabList>
        <Tabs.Tab>Title 1</Tabs.Tab>
        <Tabs.Tab>Title 2</Tabs.Tab>
        <Tabs.Tab>Long Tab Title 3</Tabs.Tab>
        <Tabs.Tab disabled>Disabled Tab</Tabs.Tab>
        <Tabs.Tab selectedClassName="funky">Funky Tab</Tabs.Tab>
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
        <p>Feeling funky!</p>
      </Tabs.TabPanel>
    </Tabs>
  )
}
