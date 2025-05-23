// Format Utilities
/**
 * Formats a number as a decimal string with fixed digits and comma separators.
 * @param value The number to format.
 * @param digits Number of decimal places (default: 2)
 * @returns Formatted decimal string
 */
export function formatDecimal(value: number, digits = 2): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/**
 * Formats a number as a currency string.
 * @param value The number to format.
 * @param currency Currency code (default: 'THB')
 * @param digits Number of decimal places (default: 2)
 * @returns Formatted currency string
 */
export function formatCurrency(value: number, currency = 'THB', digits = 2): string {
  return value.toLocaleString(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/**
 * Formats a number as a percent string.
 * @param value The number to format (e.g. 0.25 for 25%)
 * @param digits Number of decimal places (default: 2)
 * @returns Formatted percent string
 */
export function formatPercent(value: number, digits = 2): string {
  return (value * 100).toFixed(digits) + '%';
}

/**
 * Abbreviates a number (e.g. 1200000 -> 1.2M)
 * @param value The number to abbreviate
 * @param digits Number of decimal places (default: 1)
 * @returns Abbreviated string
 */
export function abbreviateNumber(value: number, digits = 1): string {
  if (value >= 1e9) return (value / 1e9).toFixed(digits) + 'B';
  if (value >= 1e6) return (value / 1e6).toFixed(digits) + 'M';
  if (value >= 1e3) return (value / 1e3).toFixed(digits) + 'K';
  return value.toString();
}

/**
 * Masks a string by replacing the middle part with a mask character.
 * @param str The string to mask
 * @param start Number of visible chars at start
 * @param end Number of visible chars at end
 * @param maskChar The mask character (default: '*')
 * @returns Masked string
 */
export function maskString(str: string, start = 2, end = 2, maskChar = '*'): string {
  if (str.length <= start + end) return str;
  // ให้จำนวน mask เท่ากับ str.length - start - end
  return (
    str.slice(0, start) +
    maskChar.repeat(str.length - start - end) +
    str.slice(str.length - end)
  );
}

/**
 * Formats a credit card number as XXXX-XXXX-XXXX-XXXX (or similar, based on length).
 * @param value The credit card number as string or number
 * @param separator The separator character (default: '-')
 * @returns Formatted credit card string
 */
export function formatCreditCard(value: string | number, separator = '-'): string {
  const digits = value.toString().replace(/\D/g, '');
  return digits.replace(/(.{4})/g, `$1${separator}`).replace(new RegExp(`${separator}+$`), '');
}

/**
 * Formats a phone number as 0X-XXX-XXXX, 02-XXX-XXXX, or international format if detected.
 * @param value The phone number as string or number
 * @param separator The separator character (default: '-')
 * @returns Formatted phone number string
 */
export function formatPhoneNumber(value: string | number, separator = '-') {
  const digits = value.toString().replace(/\D/g, '');
  // Thai mobile: 10 digits, e.g. 0812345678 => 08-123-45678
  if (digits.length === 10 && digits.startsWith('0')) {
    return `${digits.slice(0, 2)}${separator}${digits.slice(2, 5)}${separator}${digits.slice(5)}`;
  }
  // Thai landline: 9 digits, e.g. 021234567 => 02-123-4567
  if (digits.length === 9 && digits.startsWith('0')) {
    return `${digits.slice(0, 2)}${separator}${digits.slice(2, 5)}${separator}${digits.slice(5)}`;
  }
  // International: 66XXXXXXXXX, 668XXXXXXXX, +668XXXXXXXX, 661234567890
  if ((digits.length === 11 && digits.startsWith('66')) || (digits.length === 12 && digits.startsWith('66'))) {
    const country = `+${digits.slice(0, 2)}`;
    const rest = digits.slice(2);
    if (rest.length === 9 || rest.length === 10) {
      return `${country}${separator}${rest.slice(0, 2)}${separator}${rest.slice(2, 5)}${separator}${rest.slice(5)}`;
    }
    // fallback for other lengths
    return `${country}${separator}${rest}`;
  }
  // Fallback: group by 3-4 digits from right for readability
  if (digits.length > 4) {
    const right = digits.slice(-4);
    const left = digits.slice(0, -4);
    return (
      left.replace(/(\d{1,3})(?=(\d{3})+$)/g, `$1${separator}`) +
      (left ? separator : '') +
      right
    );
  }
  return digits;
}
