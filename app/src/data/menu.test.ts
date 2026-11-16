import { describe, expect, it } from 'vitest';
import { BUNDLES, formatUgx, waffleLabel } from './menu';

describe('menu data', () => {
  it('matches the confirmed bundle names and sizes', () => {
    expect(BUNDLES.map((b) => [b.name, b.waffleCount])).toEqual([
      ['VEGA', 2],
      ['SIRIUS', 4],
      ['POLARIS', 6],
      ['CANOPUS', 8],
    ]);
  });

  it('keeps prices and contents unconfirmed', () => {
    for (const b of BUNDLES) {
      expect(b.priceUgx).toBeNull();
      expect(b.contents).toBeNull();
    }
  });

  it('formats UGX and counts', () => {
    expect(formatUgx(12000)).toBe('UGX 12,000');
    expect(waffleLabel(2)).toBe('2 waffles');
    expect(waffleLabel(1)).toBe('1 waffle');
  });
});
