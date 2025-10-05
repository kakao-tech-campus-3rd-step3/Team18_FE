import { useFormContext } from 'react-hook-form';
import type { PostInterviewSchedule } from '../type/apply';

export function useUpdateFormValue() {
  const { setValue, getValues } = useFormContext();

  function updateScheduleData(date: string, mergedInterviewTime: string[]) {
    const currentInterviewSchedule = getValues('selectedInterviewSchedule') || [];

    const selectedInterviewSchedule: PostInterviewSchedule = {
      date: date,
      selectedTimes: mergedInterviewTime ?? [],
    };

    const sameDateIndex: number = currentInterviewSchedule.findIndex(
      (schedule: PostInterviewSchedule) => schedule.date === date,
    );

    let updatedSchedule: PostInterviewSchedule[];

    if (sameDateIndex !== -1) {
      updatedSchedule = [...currentInterviewSchedule];
      updatedSchedule[sameDateIndex] = selectedInterviewSchedule;
    } else {
      updatedSchedule = [...currentInterviewSchedule, selectedInterviewSchedule];
    }

    setValue('selectedInterviewSchedule', updatedSchedule);
  }

  return {
    updateScheduleData,
  };
}
