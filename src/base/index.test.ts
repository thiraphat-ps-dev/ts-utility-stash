import { isEmpty, deepClone } from './index';

describe('base utilities', () => {
  test('isEmpty checks for empty values', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('deepClone clones objects deeply', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.b).not.toBe(obj.b);
  });
});
