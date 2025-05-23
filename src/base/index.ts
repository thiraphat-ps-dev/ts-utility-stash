// Base Utilities
/**
 * Checks if a value is empty. Supports arrays, strings, objects, Map, and Set.
 * @param value The value to check.
 * @returns True if the value is empty, false otherwise.
 */
export function isEmpty(value: any): boolean {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  if (value && typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return !value;
}

/**
 * Deep clones an object using JSON serialization.
 * Note: Does not support functions, Date, Map, Set, or circular references.
 * @param obj The object to clone.
 * @returns A deep clone of the object.
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
