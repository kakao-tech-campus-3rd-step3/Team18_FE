export type Sign = 1 | -1 | 0;

export function getSign(diff: number): Sign {
  if (diff > 0) return 1;
  if (diff < 0) return -1;
  return 0;
}

export function getDiff(A: number, B: number): number {
  return A - B;
}

export function getIndexDiffSign(currentSelectedIndex: number, lastHoveredIndex: number): Sign {
  return getSign(getDiff(currentSelectedIndex, lastHoveredIndex));
}
