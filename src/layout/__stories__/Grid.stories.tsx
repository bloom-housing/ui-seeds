import React from "react"
import { Story } from "@storybook/react"

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

export const gridExample = () => (
  <>
    <Heading size="xl">Three Columns:</Heading>

    <Grid spacing="lg">
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
    </Grid>

    <Heading size="xl">Four Columns:</Heading>

    <Grid spacing="lg">
      <Grid.Row columns={4}>
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3</Grid.Cell>
        <Grid.Cell>Cell 4</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Two Columns:</Heading>

    <Grid spacing="lg">
      <Grid.Row>
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">One Column + Two Columns:</Heading>

    <Grid spacing="lg">
      <Grid.Row columns="1+2">
        <Grid.Cell>Cell 1 (Long)</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Two Columns + One Column:</Heading>

    <Grid spacing="lg">
      <Grid.Row columns="2+1">
        <Grid.Cell>Cell 1</Grid.Cell>
        <Grid.Cell>Cell 2</Grid.Cell>
        <Grid.Cell>Cell 3 (Long)</Grid.Cell>
      </Grid.Row>
    </Grid>

    <style>
      {
        ".grid {  margin-block: var(--seeds-spacer-content); } .grid-row > * { background: #eee; padding: .5rem }"
      }
    </style>
  </>
)

export const gridSpacings = () => (
  <>
    <Heading size="xl">Small Spacing</Heading>

    <Grid spacing="sm">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Medium (Default) Spacing</Heading>

    <Grid spacing="md">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Large Spacing</Heading>

    <Grid spacing="lg">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <Heading size="xl">Extra Large Spacing</Heading>

    <Grid spacing="xl">
      <Grid.Row>
        <Grid.Cell>1</Grid.Cell>
        <Grid.Cell>2</Grid.Cell>
        <Grid.Cell>3</Grid.Cell>
      </Grid.Row>
    </Grid>

    <style>
      {
        ".grid {  margin-block: var(--seeds-spacer-content); } .grid-row > * { background: #eee; padding: .5rem }"
      }
    </style>
  </>
)

export const sectionsAndForms = () => (
  <>
    <section>
      <Heading size="xl">Form Values</Heading>
      <Grid spacing="md">
        <Grid.Row>
          <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
        </Grid.Row>
        <Grid.Row>
          <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
          <FieldValue label="Property Amenities">Pool, BBQ, Rooftop View</FieldValue>
        </Grid.Row>
      </Grid>
    </section>

    <style>
      {
        ".grid { background: var(--seeds-bg-color-surface-primary); padding: var(--seeds-spacer-content); margin-block: var(--seeds-spacer-content) }"
      }
    </style>
  </>
)
