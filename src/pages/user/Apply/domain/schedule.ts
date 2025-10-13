import type { PostInterviewSchedule } from '../type/apply';

export const updateSchedule = (
  currentInterviewSchedule: PostInterviewSchedule[],
  date: string,
  selectedTime: string[],
): PostInterviewSchedule[] => {
  const sameDateIndex: number = currentInterviewSchedule.findIndex(
    (schedule: PostInterviewSchedule) => schedule.date === date,
  );

  const selectedInterviewSchedule: PostInterviewSchedule = {
    date: date,
    selectedTimes: selectedTime ?? [],
  };
  let updatedSchedule: PostInterviewSchedule[];

  if (sameDateIndex !== -1) {
    updatedSchedule = [...currentInterviewSchedule];
    updatedSchedule[sameDateIndex] = selectedInterviewSchedule;
  } else {
    updatedSchedule = [...currentInterviewSchedule, selectedInterviewSchedule];
  }

  return updatedSchedule;
};

export const updateSelectedState = (
  selectedStates: boolean[],
  startIndex: number,
  selectedIndex: number,
  selectionMode: boolean,
): boolean[] => {
  const start = Math.min(startIndex, selectedIndex);
  const end = Math.max(startIndex, selectedIndex);

  return selectedStates.map((isSelected, index) =>
    index >= start && index <= end ? selectionMode : isSelected,
  );
};
