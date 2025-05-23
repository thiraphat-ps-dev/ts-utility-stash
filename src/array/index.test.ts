import { uniq, chunk, flatten, range } from './index';

describe('array utilities', () => {
  test('uniq returns unique values', () => {
    expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    expect(uniq(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });

  test('chunk splits array into chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3], 0)).toEqual([]);
  });

  test('flatten flattens nested arrays', () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[1], [2, 3]])).toEqual([1, 2, 3]);
  });

  test('range generates a range of numbers', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(1, 5, 2)).toEqual([1, 3]);
    expect(range(5, 1, -2)).toEqual([5, 3]);
    expect(range(0, 0)).toEqual([]);
    expect(range(0, 5, 0)).toEqual([]);
  });
});
