# Seeds – Component Library for Bloom

This package serves as the home of [Bloom](https://www.exygy.com/housing)'s core UI components, meant to be imported from one or more Bloom applications. Seeds supersedes Bloom's previous "ui-components" package.

Seeds is built using TypeScript, React, and Sass. It uses Storybook for concrete component examples and Jest for testing.

## Design System Documentation

We use [zeroheight to document tokens, components, and patterns](https://zeroheight.com/5e69dd4e1/p/938cb5-seeds-design-system) for the Seeds Design System.

For code-level changes over time, [see GitHub Releases for Changelog](https://github.com/bloom-housing/ui-seeds/releases).

## Usage

### Next.js

To get Seeds set up, first add the `@bloom-housing/ui-seeds` package via npm or yarn. Next, update `next.config.js` to include the package name in its `transpilePackages` config option:

```js
  transpilePackages: [
    "@bloom-housing/ui-seeds"
  ]
```

You will need to have Sass & PostCSS installed, along with the `@csstools/postcss-global-data` & `postcss-custom-media` packages. Ensure they are available via the `postcss.config.js` file:

```js
  plugins: {
    "@csstools/postcss-global-data": {
      // in the Bloom monorepo, this starts with `../../`:
      files: ["node_modules/@bloom-housing/ui-seeds/src/global/tokens/screens.scss"],
    },
    "postcss-custom-media": {},
    ...
  }
```

Finally, import the primary CSS entrypoint for Seeds in your `_app.tsx` file:

```js
import "@bloom-housing/ui-seeds/src/global/app-css.scss"
```

Now you can import individual Seeds components on the pages where you need to use them.

## Contributing

Seeds is comprised primarily of **design tokens** and **components**. There are a handful of global style rules and utility classes, but they are intentionally kept to a minimum. Component-scoped style rules whenever possible are preferable.

For design tokens, component classes, and utility classes, it is generally recommended to start with the `seeds` prefix.

### Design Tokens

Design tokens are broken out into two layers: **base tokens** and **semantic tokens**. Semantic tokens _consume_ the base tokens. Whenever possible, components should rely on semantic tokens rather than base tokens. This will allow for easy customization of the theme downstream (consumers are encouraged to override semantic tokens, _not_ base tokens).

For example, `--seeds-color-blue-500` is set to `#0077da`. In addition, `--seeds-color-primary` is set to `var(--seeds-color-blue-500)`. Your component should utilize `--seeds-color-primary` rather than `--seeds-color-blue-500`, unless you know for certain you _always_ need to use that particular color regardless of downstream theme changes.

Components are encouraged to set up their own component specific tokens, which can leverage both semantic or base tokens (when a suitable semantic token isn't available). For example:

```css
.seeds-card {
  --card-spacing-md: var(--seeds-s6); /* a base token */
  --card-background-color: var(--seeds-bg-color-surface); /* a semantic token */
}
```

Various parts/subcomponents within a component can consume component tokens which have been defined at the top-level.

### Components

Components are built as functional React components, with filenames to match the component name. So `FieldValue.tsx` exports a component named `FieldValue`. Component files are located next to "sidecar" `.scss` files containing styles for the component.

A component class is a kebab-cased name of the component prefixed with `seeds`. So the `FieldValue` component is associated with the `seeds-field-value` class name.

Components may offer many variations such as color/type variants, sizes, etc. It is encouraged to use `data-*` attributes in your HTML to specify these variations:

```jsx
<span
  id={props.id}
  className={classNames.join(" ")}
  data-variant={props.variant || "primary"}
  data-size={props.size}
  aria-label={props.ariaLabel}
>
  {props.children}
</span>
```

Then in your stylesheet, you can add style rules based on these attributes:

```css
.seeds-tag {
  &[data-variant="primary"] {
    background-color: var(--seeds-color-primary-light);
    color: var(--seeds-color-primary-dark);
  }

  &[data-size="lg"] {
    font-size: var(--tag-font-size-lg);
    font-weight: var(--tag-font-weight-lg);
  }
}
```

Some boolean-style variations or "states" are simply easier to do as conditional classes. In that case, we typically use `is-` or `has-` prefixes, e.g. `is-fullwidth` or `has-lead-icon`.

### Documentation

Component props are documented using TypeScript interfaces.

## Testing


