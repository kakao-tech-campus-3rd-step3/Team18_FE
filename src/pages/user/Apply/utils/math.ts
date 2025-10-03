export type Sign = 1 | -1 | 0;

export function getSign(diff: number): Sign {
  if (diff > 0) return 1;
  if (diff < 0) return -1;
  return 0;
}
