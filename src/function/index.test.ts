import { debounce, throttle, once } from './index';

describe('function utilities', () => {
  test('debounce delays function call', (done) => {
    let count = 0;
    const fn = debounce(() => { count++; }, 50);
    fn(); fn(); fn();
    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 100);
  });

  test('throttle limits function call', (done) => {
    let count = 0;
    const fn = throttle(() => { count++; }, 50);
    fn(); fn(); fn();
    setTimeout(() => {
      fn();
      expect(count).toBe(2);
      done();
    }, 120);
  });

  test('once only calls function once', () => {
    let count = 0;
    const fn = once(() => ++count);
    fn(); fn(); fn();
    expect(count).toBe(1);
  });
});
