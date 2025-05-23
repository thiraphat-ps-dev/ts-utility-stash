# Contributing to ts-utility-stash

Thank you for considering contributing! Please follow these guidelines:

## Getting Started
- Clone the repo and run `npm install`
- Run `npm run build` to build the library
- Run `npm test` to run all tests

## Code Style
- Use TypeScript and follow the existing code style
- Run `npm run lint` and `npm run format` before commit

## Commit & PR
- Use clear commit messages (conventional commits preferred)
- All code must pass lint, test, and pre-commit hook (Husky)
- Open a pull request with a clear description

## Adding Utilities
- Add new utilities in the appropriate folder under `src/`
- Add unit tests in the corresponding `index.test.ts`
- Update README.md with usage examples if needed

## Build & Publish
- Build with `npm run build` (uses Rollup for ESM/CJS/types)
- Only files in `dist/` will be published to npm

## Questions?
Open an issue or discussion on GitHub!
