import { describe, expect, test } from 'bun:test';
import { DEMO_VIDEO_URL, PROTOTYPE_URL, funding, milestones } from './content';

describe('Lingo platform requirements', () => {
  test('uses the exact working prototype provided by the owner', () => {
    expect(PROTOTYPE_URL).toBe('https://t.me/LiangoTarjimonBot');
  });
  test('ships without a demo video', () => {
    expect(DEMO_VIDEO_URL).toBe('');
  });
  test('preserves the source investment ask and complete allocation', () => {
    expect(funding.amount).toBe(50_000);
    expect(funding.allocations.map(item => item.percent)).toEqual([40, 30, 20, 10]);
    expect(funding.allocations.reduce((sum, item) => sum + item.percent, 0)).toBe(100);
  });
  test('distinguishes live web launch from mobile development', () => {
    expect(milestones.map(item => item.label)).toEqual(['Idea', 'Prototype', 'MVP', 'Launched']);
    expect(milestones[3].status).toBe('current');
    expect(milestones[3].text).toContain('Mobil ilova ishlab chiqilmoqda');
  });
});