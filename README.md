# ts-utility-stash

[![npm version](https://img.shields.io/npm/v/@thiraphat-ps-dev/ts-utility-stash)](https://www.npmjs.com/package/@thiraphat-ps-dev/ts-utility-stash)
[![build status](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions/workflows/ci.yml/badge.svg)](https://github.com/thiraphat-ps-dev/ts-utility-stash/actions)
[![license](https://img.shields.io/npm/l/@thiraphat-ps-dev/ts-utility-stash)](./LICENSE)

A modern TypeScript utility library — robust, type-safe, and easy to use.

## Installation

```sh
npm install @thiraphat-ps-dev/ts-utility-stash
```

## Usage Example

```ts
import { isEmpty, formatNumber } from '@thiraphat-ps-dev/ts-utility-stash';

// Basic usage examples
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty('hello'); // false

formatNumber(1234567.89); // '1,234,567.89'
formatNumber(1234.5, { decimals: 3 }); // '1,234.500'
formatNumber(1234567.89, { locale: 'de-DE' }); // '1.234.567,89'
formatNumber(NaN); // 'NaN'
formatNumber(Infinity); // 'Infinity'
```

### Array Utilities

The library provides utilities for working with arrays:

```ts
import { isEmpty } from '@thiraphat-ps-dev/ts-utility-stash';

// Check if an array is empty
isEmpty([]); // true
isEmpty(new Array()); // true
isEmpty([1, 2, 3]); // false

// Works with array-like objects
const arrayLike = { length: 0 };
isEmpty(arrayLike); // true (empty object, not checking array-like nature)

// Type safety - works with typed arrays too
isEmpty(new Uint8Array(0)); // true
isEmpty(new Uint8Array([1, 2, 3])); // false

// Comparison with other array checks
Array.isArray([]); // true - confirms it's an array
[].length === 0; // true - vanilla JS empty check
isEmpty([]); // true - our utility combining type + empty check

// Advanced: works with array subclasses
class MyArray extends Array {}
isEmpty(new MyArray()); // true
const myFilledArray = new MyArray();
myFilledArray.push(1, 2);
isEmpty(myFilledArray); // false
```

## API

### `isEmpty(value: unknown): boolean`

- Returns `true` if the value is considered empty (array, object, string, map, set, null, undefined, ArrayBuffer, TypedArray, DataView)
- Returns `false` for non-empty values and all primitives (number, boolean, symbol, function, etc.)

### `formatNumber(value: number, options?: { decimals?: number; locale?: string }): string`

- Formats a number with commas and optional fixed decimals
- Handles `NaN`, `Infinity`, and `-Infinity` as string literals
- Supports custom locale and decimal places

## License

MIT
