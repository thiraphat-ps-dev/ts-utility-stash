import { formatDecimal, formatCurrency, formatPercent, abbreviateNumber, maskString, formatCreditCard, formatPhoneNumber } from './index';

describe('Format Utilities', () => {
  describe('formatDecimal', () => {
    it('should format number as decimal string', () => {
      expect(formatDecimal(1234.5678)).toBe('1,234.57');
      expect(formatDecimal(12, 0)).toBe('12');
    });
  });

  describe('formatCurrency', () => {
    it('should format number as currency string', () => {
      expect(formatCurrency(1234.5, 'THB')).toContain('1,234.50');
      expect(formatCurrency(1000, 'USD', 0)).toContain('1,000');
    });
  });

  describe('formatPercent', () => {
    it('should format number as percent string', () => {
      expect(formatPercent(0.25)).toBe('25.00%');
      expect(formatPercent(1, 0)).toBe('100%');
    });
  });

  describe('abbreviateNumber', () => {
    it('should abbreviate large numbers', () => {
      expect(abbreviateNumber(1200000)).toBe('1.2M');
      expect(abbreviateNumber(1500)).toBe('1.5K');
      expect(abbreviateNumber(999)).toBe('999');
    });
  });

  describe('maskString', () => {
    it('should mask the middle part of a string', () => {
      expect(maskString('0891234567')).toBe('08******67');
      expect(maskString('abcdef', 1, 1)).toBe('a****f');
      expect(maskString('abc', 2, 2)).toBe('abc');
    });
  });

  describe('formatCreditCard', () => {
    it('should format credit card number with default separator', () => {
      expect(formatCreditCard('1234567812345678')).toBe('1234-5678-1234-5678');
      expect(formatCreditCard(1234567812345678)).toBe('1234-5678-1234-5678');
    });
    it('should format with custom separator', () => {
      expect(formatCreditCard('1234567812345678', ' ')).toBe('1234 5678 1234 5678');
    });
    it('should handle short numbers', () => {
      expect(formatCreditCard('1234')).toBe('1234');
      expect(formatCreditCard('123')).toBe('123');
    });
    it('should remove non-digit characters', () => {
      expect(formatCreditCard('1234-5678-1234-5678')).toBe('1234-5678-1234-5678');
      expect(formatCreditCard('1234 5678 1234 5678')).toBe('1234-5678-1234-5678');
    });
  });

  describe('formatPhoneNumber', () => {
    it('should format Thai mobile number', () => {
      expect(formatPhoneNumber('0812345678')).toBe('08-123-45678');
      expect(formatPhoneNumber(812345678)).toBe('81-234-5678'); // fallback case
    });
    it('should format Thai landline number', () => {
      expect(formatPhoneNumber('021234567')).toBe('02-123-4567');
    });
    it('should format international number', () => {
      expect(formatPhoneNumber('+66812345678')).toBe('+66-81-234-5678');
      expect(formatPhoneNumber('66812345678')).toBe('+66-81-234-5678');
    });
    it('should fallback to group by 3-4 digits', () => {
      expect(formatPhoneNumber('1234567')).toBe('123-4567');
      expect(formatPhoneNumber('123456789')).toBe('12-345-6789');
    });
  });
});
