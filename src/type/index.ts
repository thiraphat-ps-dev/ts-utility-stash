// Type Utilities
export function isNumber(val: any): val is number {
  return typeof val === 'number' && !isNaN(val);
}

export function isString(val: any): val is string {
  return typeof val === 'string';
}

export function isBoolean(val: any): val is boolean {
  return typeof val === 'boolean';
}

export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

export function isFunction(val: any): val is Function {
  return typeof val === 'function';
}

export function isNil(val: any): val is null | undefined {
  return val == null;
}

export function isPromise(val: any): val is Promise<any> {
  return !!val && typeof val.then === 'function' && typeof val.catch === 'function';
}
