# ts-utility-stash

A collection of helpful TypeScript utility functions and helpers to speed up your development. This library is designed to be lightweight, easy to use, and suitable for a wide range of TypeScript projects.

## Features

- Common utility functions for arrays, objects, strings, and more
- Type-safe helpers for everyday TypeScript development
- Zero dependencies
- Well-documented and tested

## Installation

Using npm:

```
npm install ts-utility-stash
```

Using yarn:

```
yarn add ts-utility-stash
```

## Usage

Import the utilities you need:

```typescript
import { isEmpty, deepClone } from "ts-utility-stash";

const arr = [];
console.log(isEmpty(arr)); // true

const obj = { a: 1 };
const copy = deepClone(obj);
```

## Documentation

Each utility function is documented with usage examples and type definitions. See the [API Reference](#) for details. (To be completed as the library grows.)

## Contributing

Contributions are welcome! Please open issues or pull requests to help improve this library.

## License

MIT
