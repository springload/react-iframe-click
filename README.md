# React Iframe click

Cross-domain `<iframe>`s don't have click events, but they can be inferred with this library.

Just pass in an `onInferredClick` handler and you'll receive a callback when the iframe is clicked/tapped the first time.

# How?

We can check for a window blur event, and then see if focus has moved to the iframe from which we infer a click.

Because it's infering clicks by focus changes if the focus stays within the iframe it will only be able to infer clicks once.

This library is less than 1kb and has TypeScript bindings.

# Usage

```jsx
import Iframe from 'react-iframe-click';

// in a render...

<Iframe
    src="https://example.com"
    onInferredClick={() => alert('You clicked')}
></Iframe>;
```

# Requirements

Peer dependency on React 16.8 or later.
