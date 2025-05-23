module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.ts', '**/src/**/*.test.js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { diagnostics: true }],
  },
};
