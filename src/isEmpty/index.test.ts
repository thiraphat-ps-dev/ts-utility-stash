import { isEmpty } from './index';

describe('isEmpty', () => {
  // === Should return true ===

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(new Array())).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for null/undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty Map/Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for empty ArrayBuffer', () => {
    expect(isEmpty(new ArrayBuffer(0))).toBe(true);
  });

  it('should return true for empty TypedArray', () => {
    expect(isEmpty(new Uint8Array(0))).toBe(true);
    expect(isEmpty(new Int16Array(0))).toBe(true);
  });

  it('should return true for empty DataView', () => {
    expect(isEmpty(new DataView(new ArrayBuffer(0)))).toBe(true);
  });

  // === Should return false ===

  it('should return false for non-empty array/object/string', () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty(new Array(1, 2))).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty('a')).toBe(false);
  });

  it('should return false for non-empty Map/Set', () => {
    const m = new Map(); m.set('a', 1);
    const s = new Set(); s.add(1);
    expect(isEmpty(m)).toBe(false);
    expect(isEmpty(s)).toBe(false);
  });

  it('should return false for non-empty ArrayBuffer/TypedArray/DataView', () => {
    expect(isEmpty(new ArrayBuffer(2))).toBe(false);
    expect(isEmpty(new Uint8Array([1]))).toBe(false);
    expect(isEmpty(new DataView(new ArrayBuffer(2)))).toBe(false);
  });

  it('should return false for function', () => {
    expect(isEmpty(() => {})).toBe(false);
    expect(isEmpty(function () {})).toBe(false);
  });

  it('should return false for number, boolean, symbol', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(Symbol())).toBe(false);
  });

});
