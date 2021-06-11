# Styling

## Styling \(CSS\)

## Next Generation CSS <a id="next-generation-css"></a>

This boilerplate uses [`styled-components`](https://github.com/styled-components/styled-components) for styling React components. `styled-components` allows you to write actual CSS inside your JavaScript, enabling you to use the [full power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md) 💪 without mapping between styles and components. There are many ways to style React applications, but many developers find `styled-components` to be a more natural approach to styling components.

### Linting <a id="linting"></a>

To complement `styled-components`, this boilerplate also has a CSS linting setup. It uses `stylelint` which will help you stay consistent with modern CSS standards. Read about it [here](https://github.com/react-boilerplate/react-boilerplate-cra-template/tree/f4ac26d099b0a9143272f99e6235245dc062a614/docs/building-blocks/linting.md).

### `sanitize.css` <a id="sanitize-css"></a>

This boilerplate also uses [`sanitize.css`](https://github.com/jonathantneal/sanitize.css) to make browsers render all elements more consistently and in line with modern standards, it's a modern alternative to CSS resets. More info available on the [`sanitize.css` page](https://github.com/react-boilerplate/react-boilerplate-cra-template/tree/f4ac26d099b0a9143272f99e6235245dc062a614/docs/building-blocks/sanitize.md).

## styled-components <a id="styled-components"></a>

The example below creates two styled React components \(`<Title>` and `<Wrapper>`\) and renders them as children of the `<Header>` component:

```javascript
import * as React from 'react';
import styled from 'styled-components/macro';

// Create a <Title> React component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> React component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
function Button() {
  return (
    <Wrapper>
      <Title>Hello, here is your first styled component!</Title>
      ...
    </Wrapper>
  );
}
```

_\(The CSS rules are automatically vendor-prefixed, so you don't have to think about it!\)_

🧙**Tips:** Importing from `styled-components/macro` will enable some features you can [see here](https://styled-components.com/docs/tooling#babel-macro).

## Media queries <a id="media-queries"></a>

Type-safe media queries can be complicated if you haven't mastered TypeScript. Therefore we include a [media utility file](https://github.com/react-boilerplate/react-boilerplate-cra-template/tree/f4ac26d099b0a9143272f99e6235245dc062a614/src/styles/media.ts) to make things easier for you.

### Example Usage <a id="example-usage"></a>

```typescript
import { media } from 'styles/media';

const SomeDiv = styled.div`
  display: flex;
  ....
    ${media.medium`
      display: block
  `};
`;
```

