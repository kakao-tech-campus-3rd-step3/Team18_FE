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

export function generateHours(startHour: number, endHour: number): string[] {
  const hours: string[] = [];

  for (let h = startHour; h <= endHour; h++) {
    const hourStr = formatHour(h);

    hours.push(hourStr);

    if (h < endHour) {
      const halfHourStr = h.toString().padStart(2, '0') + ':30';
      hours.push(halfHourStr);
    }
  }
  return hours;
}

export function convertSelectionToTimeInterval(
  selected: boolean[],
  timeIntervalArray: [string, string][],
) {
  const selectedInterviewTime = new Set<string>();

  selected.forEach((curVal, index) => {
    const [start, end] = timeIntervalArray[index];
    if (curVal) {
      selectedInterviewTime.add(`${start}-${end}`);
    } else {
      selectedInterviewTime.delete(`${start}-${end}`);
    }
  });

  return selectedInterviewTime;
}
