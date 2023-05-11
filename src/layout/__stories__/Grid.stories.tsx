import React from "react"
import { Story } from "@storybook/react"

import Grid from "../Grid"
import FieldValue from "../../forms/FieldValue"
import Heading from "../../text/Heading"

//import MDXDocs from "./Grid.docs.mdx"

export default {
  title: "Layout/Grid",
  component: Grid,
  // parameters: {
  //   docs: {
  //     page: MDXDocs,
  //   },
  // },
}

export const gridExample = () => (
  <>
    <Grid spacing="lg">

      <p>Three Columns:</p>

      <Grid.Row>
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3</Grid.Cell>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Cell>Cell 4</Grid.Cell>
        <Grid.Cell>Cell 5</Grid.Cell>
        <Grid.Cell>Cell 6</Grid.Cell>
      </Grid.Row>

      <p>Four Columns:</p>

      <Grid.Row columns={4}>
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3</Grid.Cell>
        <Grid.Cell>Cell 4</Grid.Cell>
      </Grid.Row>

      <p>Two Columns:</p>

      <Grid.Row>
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
      </Grid.Row>

      <p>One Column + Two Columns:</p>

      <Grid.Row columns="1+2">
        <Grid.Cell>Cell 1 (Long)</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3</Grid.Cell>
      </Grid.Row>

      <p>Two Columns + One Column:</p>

      <Grid.Row columns="2+1">
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3 (Long)</Grid.Cell>
      </Grid.Row>
    </Grid>

    <style>{".grid-row > * { background: #eee; padding: .5rem } .grid > p { margin: 0 }"}</style>
  </>
)

export const gridSpacings = () => (
  <>
    <h3>Small Spacing</h3>

    <Grid spacing="sm">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>
    
    <h3>Base (Default) Spacing</h3>

    <Grid spacing="base">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <h3>Medium Spacing</h3>

    <Grid spacing="md">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <h3>Large Spacing</h3>

    <Grid spacing="lg">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <style>{".grid-row > * { background: #eee; padding: .5rem } .grid > p { margin: 0 }"}</style>
  </>
)

export const sectionsAndForms = () => (
  <>
    <section>
      <Heading size="xl">Form Values</Heading>
      <Grid spacing="md">
        <Grid.Row>
          <FieldValue label="Property Amenities">
            Pool, BBQ, Rooftop View
          </FieldValue>
          <FieldValue label="Property Amenities">
            Pool, BBQ, Rooftop View
          </FieldValue>
          <FieldValue label="Property Amenities">
            Pool, BBQ, Rooftop View
          </FieldValue>
        </Grid.Row>
        <Grid.Row>
          <FieldValue label="Property Amenities">
            Pool, BBQ, Rooftop View
          </FieldValue>
          <FieldValue label="Property Amenities">
            Pool, BBQ, Rooftop View
          </FieldValue>
        </Grid.Row>
      </Grid>
    </section>

    <style>{".grid { background: var(--bloom-bg-color-surface-primary); padding: var(--bloom-spacer-content); margin-top: var(--bloom-spacer-content) }"}</style>
  </>
)
