import { merge, omit, pick, deepMerge } from './index';

describe('object utilities', () => {
  test('merge combines two objects', () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test('omit removes specified keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b', 'c'])).toEqual({ a: 1 });
  });

  test('pick selects specified keys', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['b', 'c'])).toEqual({ b: 2, c: 3 });
  });

  test('deepMerge merges nested objects', () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { b: { d: 3 }, e: 4 };
    expect(deepMerge(JSON.parse(JSON.stringify(a)), b)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });
});
