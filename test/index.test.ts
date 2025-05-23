import { isEmpty, deepClone } from '../src/index';

describe('isEmpty', () => {
  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });
  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2])).toBe(false);
  });
  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
  it('should return false for non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });
  it('should return false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });
});

describe('deepClone', () => {
  it('should deeply clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect(clone.b).not.toBe(obj.b);
  });
});
