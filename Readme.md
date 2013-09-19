# to-dot-case

  Convert a non-dot-case string to a dot-case string.

## Installation

    $ component install ianstormtaylor/to-dot-case

## Example

```js
var dot = require('to-dot-case');

dot('camelCase');  // "camel.case"
dot('space case'); // "snake.case"
dot('slug-case');  // "slug.case"
dot('weird[case'); // "weird.case"
```

## API

### toDotCase(string)
  
  Returns the dot-case variant of a `string`.

## License

  MIT
