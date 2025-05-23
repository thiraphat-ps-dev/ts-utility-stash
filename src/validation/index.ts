// Validation utilities

/** Check if value is an email. */
export function isEmail(val: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

/** Check if value is a valid URL. */
export function isURL(val: string): boolean {
  try {
    new URL(val);
    return true;
  } catch {
    return false;
  }
}
