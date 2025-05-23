// Utility functions will be added here

export function isEmpty(value: any): boolean {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }
  if (value && typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return !value;
}

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
