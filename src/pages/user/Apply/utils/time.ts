export function parseTime(time: string): number {
  return parseInt(time.split(':')[0], 10);
}

export function convertTime(startNum: number, index: string): string {
  let addMinutes = parseInt(index) * 30;

  const addHours = startNum + Math.floor(addMinutes / 60);

  addMinutes %= 60;

  return addHours + ':' + String(addMinutes).padStart(2, '0');
}

export const formatHour = (hour: number): string => {
  return hour.toString().padStart(2, '0') + ':00';
};

export function getTimeIntervalArray(hourArray: string[]) {
  const thirtyMinuteArray: [string, string][] = [];

  for (let i = 0; i < hourArray.length - 1; i++) {
    thirtyMinuteArray.push([hourArray[i], hourArray[i + 1]]);
  }

  return thirtyMinuteArray;
}
