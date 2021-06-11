# CLI & Scaffolding

## Generators <a id="production"></a>

```text
yarn generate
```

Allows you to auto-generate boilerplate code for common parts of your application, specifically `component`s, and `redux-toolkit slice`s. You can also run `yarn generate <part>` to skip the first selection \(e.g., `yarn generate component`\).

```text
yarn test:generators
```

Test whether the generators are working fine. It generates components and slices with a variety of settings. This command is helpful if you decide to customize generators for your needs.

## Production <a id="production"></a>

```text
yarn start:prod
```

* Builds your app \(see `yarn run build`\)
* Serves the `build` folder locally

The app is built for optimal performance; assets are minified and served `gzip`-ed.

## Unit testing <a id="unit-testing"></a>

```text
yarn test
```

Unit tests specified in the `**/__tests__/*.ts` files throughout the application are run.

All the `test` commands allow an optional `-- [string]` argument to filter the tests run by Jest, useful if you need to run a specific test only.

```text
# Run only the Button component tests yarn test -- Button
```

## Linting <a id="linting"></a>

```text
yarn lint
```

Lints your Typescript and your CSS.

```text
yarn lint:fix
```

Lints your code and tries to fix any errors it finds.

## Extracting translation JSON Files <a id="extracting-translation-json-files"></a>

```text
yarn extract-messages
```

## Typescript <a id="typescript"></a>

```text
yarn checkTs
```

Checks for TypeScript errors.

