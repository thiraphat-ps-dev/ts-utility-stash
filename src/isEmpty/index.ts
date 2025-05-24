// isEmpty utility

/**
 * Check if a value is empty (array, object, string, map, set, null, undefined, ArrayBuffer, TypedArray)
 */
export function isEmpty(val: unknown): boolean {
  // null or undefined
  if (val == null) return true;

  // string or String object
  if (typeof val === 'string' || val instanceof String) return val.length === 0;

  // array or Array object
  if (Array.isArray(val) || val instanceof Array) return val.length === 0;

  // Map or Set
  if (val instanceof Map || val instanceof Set) return val.size === 0;

  // ArrayBuffer
  if (typeof ArrayBuffer !== 'undefined' && val instanceof ArrayBuffer) return val.byteLength === 0;

  // TypedArray, DataView
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView?.(val)) return val.byteLength === 0;

  // function is never empty
  if (typeof val === 'function') return false;

  // plain object
  if (typeof val === 'object') return Object.keys(val).length === 0;

  // other types (number, boolean, symbol, bigint)
  return false;
}
