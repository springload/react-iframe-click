# React Iframe click

Cross-domain `<iframe>`s don't have click events, but they can be inferred with this library.

Just pass in an `onInferredClick` handler and you'll receive a callback when the iframe is clicked/tapped.

# How?

We can check for a window blur event, and then see if focus has moved to the iframe from which we infer a click.

This library is less than 1kb and has TypeScript bindings.

# Requirements

Peer dependency on React 16.8 or later.
