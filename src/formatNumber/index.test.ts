import { formatNumber } from './index';

describe('formatNumber', () => {
  // === Basic formatting ===
  it('formats integer with commas', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats float with default decimals', () => {
    expect(formatNumber(1234567.89)).toBe('1,234,567.89');
  });

  it('formats with no options', () => {
    expect(formatNumber(42)).toBe('42');
  });

  // === Decimals ===
  it('formats with custom decimals', () => {
    expect(formatNumber(1234.5, { decimals: 3 })).toBe('1,234.500');
    expect(formatNumber(1234, { decimals: 2 })).toBe('1,234.00');
  });

  it('formats with decimals = 0', () => {
    expect(formatNumber(1234.56, { decimals: 0 })).toBe('1,235');
  });

  it('formats with decimals > digits', () => {
    expect(formatNumber(1.2, { decimals: 5 })).toBe('1.20000');
  });

  it('formats integer with decimals', () => {
    expect(formatNumber(1000, { decimals: 2 })).toBe('1,000.00');
  });

  it('formats float with no decimals option', () => {
    expect(formatNumber(1234.567)).toBe('1,234.567');
  });

  // === Locale ===
  it('formats with custom locale', () => {
    expect(formatNumber(1234567.89, { locale: 'de-DE' })).toBe('1.234.567,89');
    expect(formatNumber(1234567.89, { locale: 'th-TH' })).toMatch(/1,234,567.89|1,234,567.89/); // Thai locale
  });

  // === Edge cases ===
  it('formats negative numbers', () => {
    expect(formatNumber(-1234567.89)).toBe('-1,234,567.89');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(0, { decimals: 2 })).toBe('0.00');
  });

  it('formats NaN and Infinity', () => {
    expect(formatNumber(NaN)).toBe('NaN');
    expect(formatNumber(Infinity)).toBe('Infinity');
    expect(formatNumber(-Infinity)).toBe('-Infinity');
  });
});
