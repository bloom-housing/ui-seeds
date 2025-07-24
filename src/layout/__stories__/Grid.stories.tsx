import React from "react"
import Grid from "../Grid"
import FieldValue from "../../forms/FieldValue"
import Heading from "../../text/Heading"
import MDXDocs from "./Grid.docs.mdx"

export default {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    docs: {
      page: MDXDocs,
    },
  },
}

const StoryStyles = () => (
  <style>
    {
      ".seeds-grid {  margin-block: var(--seeds-spacer-content); } .seeds-grid-row > * { background: var(--seeds-color-highlight-warm-light); color: var(--seeds-color-highlight-warm-darker); padding: 1rem; text-align: center; }"
    }
  </style>
)

export const GridExample = () => (
  <>
    <Heading size="xl">Three Columns:</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row columns={3} roles>
        <Grid.Cell roles>Cell 1</Grid.Cell>
        <Grid.Cell roles>Cell 2</Grid.Cell>
        <Grid.Cell roles>Cell 3</Grid.Cell>
        <Grid.Cell roles>Cell 4</Grid.Cell>
        <Grid.Cell roles>Cell 5</Grid.Cell>
        <Grid.Cell roles>Cell 6</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Four Columns:</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row columns={4} roles>
        <Grid.Cell roles>Cell 1</Grid.Cell>
        <Grid.Cell roles>Cell 2</Grid.Cell>
        <Grid.Cell roles>Cell 3</Grid.Cell>
        <Grid.Cell roles>Cell 4</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Two Columns:</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row roles>
        <Grid.Cell roles>Cell 1</Grid.Cell>
        <Grid.Cell roles>Cell 2</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">One Column + Two Columns:</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row columns="4" roles>
        <Grid.Cell className="seeds-grid-span-2" roles>
          Cell 1 (Long)
        </Grid.Cell>
        <Grid.Cell roles>Cell 2</Grid.Cell>
        <Grid.Cell roles>Cell 3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Two Columns + One Column:</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row columns="4" roles>
        <Grid.Cell roles>Cell 1</Grid.Cell>
        <Grid.Cell roles>Cell 2</Grid.Cell>
        <Grid.Cell className="seeds-grid-span-2" roles>
          Cell 3 (Long)
        </Grid.Cell>
      </Grid.Row>
    </Grid>
    <StoryStyles />
  </>
)

export const gridSpacings = () => (
  <>
    <Heading size="xl">Small Spacing</Heading>

    <Grid spacing="sm" roles>
      <Grid.Row roles>
        <Grid.Cell roles>1</Grid.Cell>
        <Grid.Cell roles>2</Grid.Cell>
        <Grid.Cell roles>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Medium (Default) Spacing</Heading>

    <Grid spacing="md" roles>
      <Grid.Row roles>
        <Grid.Cell roles>1</Grid.Cell>
        <Grid.Cell roles>2</Grid.Cell>
        <Grid.Cell roles>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Large Spacing</Heading>

    <Grid spacing="lg" roles>
      <Grid.Row roles>
        <Grid.Cell roles>1</Grid.Cell>
        <Grid.Cell roles>2</Grid.Cell>
        <Grid.Cell roles>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Extra Large Spacing</Heading>

    <Grid spacing="xl" roles>
      <Grid.Row roles>
        <Grid.Cell roles>1</Grid.Cell>
        <Grid.Cell roles>2</Grid.Cell>
        <Grid.Cell roles>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <StoryStyles />
  </>
)

export const differentColumnCounts = () => (
  <>
    <Grid roles>
      <Grid.Row roles>
        <Grid.Cell roles>1</Grid.Cell>
        <Grid.Cell roles>2</Grid.Cell>
        <Grid.Cell roles>3</Grid.Cell>
      </Grid.Row>

      <Grid.Row>
        <Grid.Cell roles>4</Grid.Cell>
        <Grid.Cell roles>5</Grid.Cell>
      </Grid.Row>

      <Grid.Row>
        <Grid.Cell roles>6</Grid.Cell>
        <Grid.Cell roles>7</Grid.Cell>
        <Grid.Cell roles>8</Grid.Cell>
        <Grid.Cell roles>9</Grid.Cell>
      </Grid.Row>
    </Grid>

    <StoryStyles />
  </>
)

export const sectionsAndFieldValues = () => (
  <>
    <section>
      <Heading size="xl">Field Values</Heading>
      <Grid spacing="md" roles>
        <Grid.Row roles>
          <Grid.Cell roles>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell roles>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell roles>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row roles>
          <Grid.Cell roles>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell roles>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
    </section>

    <StoryStyles />
  </>
)

export const noRolesOnlyLayout = () => (
  <>
    <section>
      <Heading size="xl">Field Values</Heading>
      <Grid spacing="md">
        <Grid.Row>
          <Grid.Cell>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row>
          <Grid.Cell>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
          <Grid.Cell>
            <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
    </section>

    <StoryStyles />
  </>
)
