import { isEmail, isURL } from './index';

describe('validation utilities', () => {
  it('isEmail should validate email', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('not-an-email')).toBe(false);
  });
  it('isURL should validate url', () => {
    expect(isURL('https://example.com')).toBe(true);
    expect(isURL('not-a-url')).toBe(false);
  });
});
