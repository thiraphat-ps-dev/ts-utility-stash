# ts-utility-stash

[![npm version](https://img.shields.io/npm/v/@thiraphat-ps-dev/ts-utility-stash)](https://www.npmjs.com/package/@thiraphat-ps-dev/ts-utility-stash)
[![build status](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions/workflows/ci.yml/badge.svg)](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions)
[![license](https://img.shields.io/npm/l/@thiraphat-ps-dev/ts-utility-stash)](./LICENSE)

A modern TypeScript utility library — now focused on a single robust helper: `isEmpty`.

## Installation

```sh
npm install @thiraphat-ps-dev/ts-utility-stash
```

## Usage Example

```ts
import { isEmpty } from '@thiraphat-ps-dev/ts-utility-stash';

isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty(new Map()); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1 }); // false
isEmpty('hello'); // false
isEmpty(new Set([1])); // false
isEmpty(new ArrayBuffer(0)); // true
isEmpty(new Uint8Array([1])); // false
isEmpty(() => {}); // false
isEmpty(0); // false
```

## API

### `isEmpty(value: unknown): boolean`

- Returns `true` if the value is considered empty (array, object, string, map, set, null, undefined, ArrayBuffer, TypedArray, DataView)
- Returns `false` for non-empty values and all primitives (number, boolean, symbol, function, etc.)

## License

MIT
