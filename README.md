# Seeds – Component Library for Bloom

This package is the home of the core UI components for the Bloom affordable housing system, meant to be imported from one or more applications that provide the end-user interface.

Seeds is built using TypeScript, React, and Sass. It uses Storybook for concrete component examples and Jest for testing.

## Design System Documentation

We use [zeroheight to document tokens, components, and patterns](https://zeroheight.com/5e69dd4e1/p/938cb5-seeds-design-system) for the Seeds Design System.

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



## Testing
