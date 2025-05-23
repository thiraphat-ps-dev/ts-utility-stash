# ts-utility-stash

[![npm version](https://img.shields.io/npm/v/@thiraphat-ps-dev/ts-utility-stash)](https://www.npmjs.com/package/@thiraphat-ps-dev/ts-utility-stash)
[![build status](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions/workflows/ci.yml/badge.svg)](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions)
[![code coverage](https://img.shields.io/badge/coverage-unknown-lightgrey)](./BADGES.md)
[![license](https://img.shields.io/npm/l/@thiraphat-ps-dev/ts-utility-stash)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/@thiraphat-ps-dev/ts-utility-stash)](https://www.npmjs.com/package/@thiraphat-ps-dev/ts-utility-stash)

A collection of helpful TypeScript utility functions and helpers.

## Installation

```sh
npm install @thiraphat-ps-dev/ts-utility-stash
```

## Usage Example

```ts
import {
  array,
  object,
  string,
  type,
  function as fn,
  base,
  format,
  other,
} from '@thiraphat-ps-dev/ts-utility-stash';

// Array utilities
const unique = array.unique([1, 2, 2, 3]);

// Object utilities
const keys = object.keys({ a: 1, b: 2 });

// String utilities
const capital = string.capitalize('hello');

// Type utilities
const isString = type.isString('abc');

// Function utilities
const onceFn = fn.once(() => console.log('run once'));

// Base utilities
const clamp = base.clamp(10, 0, 5);

// Format utilities
const pretty = format.prettyBytes(1024);

// Other utilities
const noop = other.noop();
```

## Documentation

- [Badges & Coverage](./BADGES.md)
- [Contribution Guide](./CONTRIBUTING.md)

## License

MIT
