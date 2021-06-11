# Testing

* ​[Component testing](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#component-testing)
  * ​[react-testing-library](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#react-testing-library) - [`button.test.tsx`](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#buttontesttsx)​​
    * ​[Behavior testing](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#behavior-testing) - [`button.test.tsx`](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#buttontesttsx-1) - [`button.test.tsx`](https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/testing#buttontesttsx-2)​

## react-testing-library <a id="react-testing-library"></a>

To write more maintainable tests that more closely resemble the way our component is used in real life, we have included [react-testing-library](https://github.com/testing-library/react-testing-library). This library renders our component within a simulated DOM and provides utilities for querying it.

Let's give it a go with our `<Button />` component, shall we? First, let's check that it renders our component with its children, if any, and second, that it handles clicks.

This is our test setup:

#### `button.test.tsx` <a id="button-test-tsx"></a>

```javascript
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('renders and matches the snapshot', () => {});

  it('handles clicks', () => {});
});
```

### Behavior testing <a id="behavior-testing"></a>

Onwards to our last and most advanced test: checking that our `<Button />` handles clicks correctly.

We'll use a [mock function](https://jestjs.io/docs/en/mock-functions) for this. A mock function is a function that keeps track of _if_, _how often_, and _with what arguments_ it has been called. We pass this function as the `onClick` handler to our component, simulate a click, and, lastly, check that our mock function was called:

#### `button.test.tsx` <a id="button-test-tsx-1"></a>

```typescript
it('handles clicks', () => {
  const onClickSpy = jest.fn();
  const text = 'Click me!';
  const { getByText } = render(<Button onClick={onClickSpy}>{text}</Button>);

  fireEvent.click(getByText(text));
  expect(onClickSpy).toHaveBeenCalledTimes(1);
});
```

Our finished test file looks like this:

#### `button.test.tsx` <a id="button-test-tsx-2"></a>

```typescript
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('renders and matches the snapshot', () => {
    const text = 'Click me!';
    const { container } = render(<Button>{text}</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('handles clicks', () => {
    const onClickSpy = jest.fn();
    const text = 'Click me!';
    const { getByText } = render(<Button onClick={onClickSpy}>{text}</Button>);

    fireEvent.click(getByText(text));
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
```

And that's how you unit-test your components and make sure they work correctly!

Be sure to have a look at our example application. It deliberately shows some variations of test implementations with `react-testing-library`.

