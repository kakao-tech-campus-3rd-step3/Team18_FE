import { useMemo } from 'react';
import type { ApplicationForm, ApplicationFormData } from '../types/fieldType';
import {
  useApplicationForm,
  usePatchApplicationForm,
  usePostApplicationForm,
} from './useApplicationForm';

export const useAdaptedApplicationForm = (clubId: number) => {
  const { data: apiData, isLoading, error } = useApplicationForm(clubId);

  const adaptedData = useMemo(() => {
    if (!apiData) return undefined;

    return {
      ...apiData,
      formQuestions: apiData.formQuestions.map((question) => {
        const rawTimeSlot = question.timeSlotOptions;
        const correctedTimeSlot = Array.isArray(rawTimeSlot) ? rawTimeSlot[0] : rawTimeSlot;

        return {
          ...question,
          optionList:
            question.optionList?.map((option) =>
              typeof option === 'string' ? { value: option } : option,
            ) || [],
          timeSlotOptions: correctedTimeSlot || {
            date: '',
            availableTime: { start: '', end: '' },
          },
        };
      }),
    };
  }, [apiData]);

  return { data: adaptedData, isLoading, error };
};

export const useAdaptedPatchApplicationForm = (clubId: number) => {
  const { patchForm, isSuccess } = usePatchApplicationForm(clubId);

  const adaptedPatchForm = (
    formData: ApplicationFormData,
    options?: { onSuccess?: () => void; onError?: (error: Error) => void },
  ) => {
    const submissionData: Partial<ApplicationForm> = {
      ...formData,
      formQuestions: formData.formQuestions.map((question) => ({
        ...question,
        optionList: question.optionList?.map((option) => option.value) || [],
        timeSlotOptions: question.timeSlotOptions ? [question.timeSlotOptions] : [],
      })),
    };

    patchForm(submissionData, options);
  };

  return { adaptedPatchForm, isSuccess };
};

export const useAdaptedPostApplicationForm = (clubId: number) => {
  const { postForm, isSuccess } = usePostApplicationForm(clubId);

  const adaptedPostForm = (
    formData: ApplicationFormData,
    options?: { onSuccess?: () => void; onError?: (error: Error) => void },
  ) => {
    const submissionData: ApplicationForm = {
      ...formData,
      formQuestions: formData.formQuestions.map((question) => {
        return {
          ...question,
          optionList: question.optionList?.map((option) => option.value) || [],
          timeSlotOptions: question.timeSlotOptions ? [question.timeSlotOptions] : [],
        };
      }),
    };

    postForm(submissionData, options);
  };

  return { adaptedPostForm, isSuccess };
};
