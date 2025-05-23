# ts-utility-stash

[![CI](https://github.com/your-username/ts-utility-stash/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/ts-utility-stash/actions)

A collection of helpful TypeScript utility functions and helpers to speed up your development. This library is designed to be lightweight, easy to use, and suitable for a wide range of TypeScript projects.

## Features

- Common utility functions for arrays, objects, strings, types, functions, and more
- Type-safe helpers for everyday TypeScript development
- Zero dependencies
- Well-documented and tested
- Modern folder-based structure, easy to extend

## Installation

```sh
npm install ts-utility-stash
# or
yarn add ts-utility-stash
```

## Quick Start Example

```typescript
import { uniq, chunk, capitalize, formatDecimal } from 'ts-utility-stash';

console.log(uniq([1, 2, 2, 3])); // [1, 2, 3]
console.log(chunk([1, 2, 3, 4], 2)); // [[1,2],[3,4]]
console.log(capitalize('hello world')); // Hello world
console.log(formatDecimal(12345.678)); // '12,345.68'
```

## Utility Categories & Examples

### Array Utilities

```typescript
import { uniq, chunk, flatten, range } from 'ts-utility-stash';
uniq([1, 2, 2, 3]); // [1,2,3]
chunk([1, 2, 3, 4], 2); // [[1,2],[3,4]]
flatten([1, [2, [3, 4]], 5]); // [1,2,3,4,5]
range(0, 5); // [0,1,2,3,4]
```

### Object Utilities

```typescript
import { merge, omit, pick, deepMerge } from 'ts-utility-stash';
merge({ a: 1 }, { b: 2 }); // {a:1, b:2}
omit({ a: 1, b: 2 }, ['b']); // {a:1}
pick({ a: 1, b: 2 }, ['b']); // {b:2}
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } }); // {a:1, b:{c:2, d:3}}
```

### String Utilities

```typescript
import { capitalize, kebabCase, camelCase, snakeCase } from 'ts-utility-stash';
capitalize('hello'); // Hello
kebabCase('Hello World'); // hello-world
camelCase('hello-world'); // helloWorld
snakeCase('Hello World'); // hello_world
```

### Type Utilities

```typescript
import {
  isNumber,
  isString,
  isBoolean,
  isObject,
  isFunction,
  isNil,
  isPromise,
} from 'ts-utility-stash';
isNumber(123); // true
isString('abc'); // true
isNil(undefined); // true
```

### Function Utilities

```typescript
import { debounce, throttle, once } from 'ts-utility-stash';
const log = () => console.log('called');
const debounced = debounce(log, 100);
debounced();
debounced(); // log() will be called only once after 100ms
const throttled = throttle(log, 100);
throttled();
throttled(); // log() will be called at most once per 100ms
const onceFn = once(log);
onceFn();
onceFn(); // log() will be called only once
```

### Other Utilities

```typescript
import { clamp, sleep } from 'ts-utility-stash';
clamp(5, 1, 10); // 5
await sleep(100); // waits 100ms
```

### Format Utilities

```typescript
import {
  formatDecimal,
  formatCurrency,
  formatPercent,
  abbreviateNumber,
  maskString,
  formatCreditCard,
  formatPhoneNumber,
} from 'ts-utility-stash';
formatDecimal(1234.56); // '1,234.56'
formatCurrency(1234.56, 'THB'); // '฿1,234.56'
formatPercent(0.25); // '25.00%'
abbreviateNumber(1200000); // '1.2M'
maskString('123456789012', 2, 2); // '12********12'
formatCreditCard('1234567812345678'); // '1234-5678-1234-5678'
formatPhoneNumber('0812345678'); // '08-123-45678'
```

## Performance & Bundle Size

- **Tree-shakable:** All exports are named, so bundlers (webpack, Rollup, etc.) can remove unused code automatically.
- **No dependencies:** The library is extremely lightweight.
- **Submodule imports:** You can import only what you need for optimal bundle size:

```typescript
import { uniq } from 'ts-utility-stash/array';
import { capitalize } from 'ts-utility-stash/string';
```

- **Check bundle size:**

  - Use [Bundlephobia](https://bundlephobia.com/package/ts-utility-stash) to see the published size.
  - Or add [size-limit](https://github.com/ai/size-limit):
    ```sh
    npm install --save-dev size-limit
    npx size-limit
    ```
  - Add this to your `package.json` for automated checks:
    ```json
    "size-limit": [
      {
        "path": "dist/index.js",
        "limit": "5 KB"
      }
    ]
    ```

- **Performance:**
  - All utilities are written for speed and minimal memory usage.
  - For custom benchmarks, see [benchmark.js](https://www.npmjs.com/package/benchmark) or [tinybench](https://github.com/tinylibs/tinybench).

## API Reference

Each utility function is documented with usage examples and type definitions in the source code. See the `src/` folder for details. (Full API docs coming soon.)

## Testing & CI

- 100% unit test coverage for all modules (see `src/[module]/index.test.ts`)
- GitHub Actions CI: Lint & test on every push/pull request to `main`

## Contributing

Contributions are welcome! Please open issues or pull requests to help improve this library.

## License

MIT
