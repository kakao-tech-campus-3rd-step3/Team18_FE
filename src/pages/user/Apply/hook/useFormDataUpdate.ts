import { useFormContext } from 'react-hook-form';
import { updateSchedule } from '../domain/schedule';
import { convertSelectionToTimeInterval, mergeContinuousTimeInterval } from '../utils/time';
import type { FormInputs, PostInterviewSchedule } from '../type/apply';

export function useInterviewScheduleUpdater(date: string, timeSlotsArray: [string, string][]) {
  const { setValue, getValues } = useFormContext<FormInputs>();

  const updateInterviewSchedule = (isSelectedStates: boolean[]) => {
    const selectedTimes = convertSelectionToTimeInterval(isSelectedStates, timeSlotsArray);
    const mergedTimes = mergeContinuousTimeInterval(selectedTimes);
    const currentSchedules: PostInterviewSchedule[] = getValues('selectedInterviewSchedule') || [];

    const updatedSchedules = updateSchedule(currentSchedules, date, mergedTimes);
    setValue('selectedInterviewSchedule', updatedSchedules);
  };

  return { updateInterviewSchedule };
}
