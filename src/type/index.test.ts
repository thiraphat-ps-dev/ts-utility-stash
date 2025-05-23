import { isNumber, isString, isBoolean, isObject, isFunction, isNil, isPromise } from './index';

describe('type utilities', () => {
  test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber('123')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  test('isString', () => {
    expect(isString('abc')).toBe(true);
    expect(isString(123)).toBe(false);
  });

  test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
  });

  test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
  });

  test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(123)).toBe(false);
  });

  test('isNil', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
    expect(isNil(0)).toBe(false);
  });

  test('isPromise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise({ then: () => {}, catch: () => {} })).toBe(true);
    expect(isPromise({})).toBe(false);
  });
});
