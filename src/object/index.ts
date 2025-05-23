// Object Utilities
export function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}

export function deepMerge<T extends Record<string, any>>(target: T, source: any): T {
  if (typeof target !== 'object' || typeof source !== 'object' || !target || !source) {
    return source;
  }
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object') {
      (target as any)[key] = (target as any)[key] ?? {};
      deepMerge((target as any)[key], source[key]);
    } else {
      (target as any)[key] = source[key];
    }
  }
  return target;
}
