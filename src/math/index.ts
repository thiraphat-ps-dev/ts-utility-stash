// Math utilities

/** Clamp a number between min and max (inclusive). */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/** Get the average of an array of numbers. */
export function average(arr: number[]): number {
  if (!arr.length) return NaN;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
