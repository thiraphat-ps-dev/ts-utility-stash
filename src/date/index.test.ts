import { formatDate, isToday } from './index';

describe('date utilities', () => {
  it('formatDate should format date as YYYY-MM-DD', () => {
    expect(formatDate(new Date('2024-01-02'))).toBe('2024-01-02');
  });
  it('isToday should return true for today', () => {
    expect(isToday(new Date())).toBe(true);
  });
  it('isToday should return false for other days', () => {
    expect(isToday(new Date('2000-01-01'))).toBe(false);
  });
});
