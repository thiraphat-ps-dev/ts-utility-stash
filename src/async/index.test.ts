import { sleep, retry } from './index';

describe('async utilities', () => {
  it('sleep should resolve after ms', async () => {
    const start = Date.now();
    await sleep(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(50);
  });
  it('retry should retry failed fn', async () => {
    let count = 0;
    const fn = jest.fn(async () => {
      count++;
      if (count < 2) throw new Error('fail');
      return 'ok';
    });
    await expect(retry(fn, 3)).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
