import { useCallback, useEffect, useState } from 'react';
import type { UseFormReset, UseFormWatch } from 'react-hook-form';
import { debounce } from '@/utils/debounce';
import type { FormInputs } from '../type/apply';

interface UseApplicationAutoSaveProps {
  clubId: number;
  watch: UseFormWatch<FormInputs>;
  reset: UseFormReset<FormInputs>;
}

export const useApplicationAutoSave = ({
  clubId,
  watch,
  reset,
}: UseApplicationAutoSaveProps) => {
  const [isSaving, setIsSaving] = useState(false);

  const debouncedSave = useCallback(
    debounce((data: FormInputs) => {
      localStorage.setItem(`application-form-${clubId}`, JSON.stringify(data));
      setIsSaving(false);
    }, 3000),
    [clubId],
  );

  useEffect(() => {
    const savedData = localStorage.getItem(`application-form-${clubId}`);
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [clubId, reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      setIsSaving(true);
      debouncedSave(value as FormInputs);
    });
    return () => subscription.unsubscribe();
  }, [watch, debouncedSave]);

  return { isSaving };
};
