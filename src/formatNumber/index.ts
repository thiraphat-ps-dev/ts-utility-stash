// formatNumber utility

/**
 * Format a number with commas and optional fixed decimals.
 * @param value number to format
 * @param options optional: { decimals?: number, locale?: string }
 * @returns formatted string
 */
export function formatNumber(
  value: number,
  options?: { decimals?: number; locale?: string }
): string {
  if (Number.isNaN(value)) return 'NaN';
  if (value === Infinity) return 'Infinity';
  if (value === -Infinity) return '-Infinity';

  const { decimals, locale } = options ?? {};
  return value.toLocaleString(locale ?? 'en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
