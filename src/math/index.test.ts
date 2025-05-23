import { clamp, average } from './index';

describe('math utilities', () => {
  it('clamp should clamp value within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-1, 0, 2)).toBe(0);
    expect(clamp(100, 0, 10)).toBe(10);
  });
  it('average should return average of array', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([])).toBeNaN();
  });
});
