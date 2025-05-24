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

// isEmpty
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty('hello'); // false

// formatNumber
formatNumber(1234567.89); // '1,234,567.89'
formatNumber(1234.5, { decimals: 3 }); // '1,234.500'
formatNumber(1234567.89, { locale: 'de-DE' }); // '1.234.567,89'
formatNumber(NaN); // 'NaN'
formatNumber(Infinity); // 'Infinity'
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
