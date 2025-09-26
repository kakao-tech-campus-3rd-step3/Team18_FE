export function parseTime(time: string) {
  return parseInt(time.split(':')[0], 10);
}
